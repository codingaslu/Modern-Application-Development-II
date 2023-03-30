from flask import Flask
from celery.schedules import crontab
import worker
import tasks

app = Flask(__name__)
celery = worker.celery

@celery.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls test('hello') every 10 seconds.
    sender.add_periodic_task(
        crontab(hour=11, minute=5, day_of_week=6),
        tasks.sum.s(20, 30),
    )


@app.get('/')
def home():
    return "Welocome to the live session"

@app.get('/sum/a/<int:a>/b/<int:b>')
def get_sum(a, b):
    c = tasks.sum.apply_async((2, 2), expires=1)

    return "Task in progress"



if __name__ == "__main__":
    app.run(debug=True)
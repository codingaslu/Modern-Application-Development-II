from celery import Celery

cel_app = Celery('tasks', broker='redis://localhost:6379/1', backend='redis://localhost:6379/2')

@cel_app.task
def add(x, y):
    return x + y
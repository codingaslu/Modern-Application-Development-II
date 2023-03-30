## Steps to run the celery app

- Install redis if not installed
- Run redis server
  - $ redis-server
- cd into the celery-demo folder
- Create a virtual environment
- Activate the virtual environment
- Install all dependencies
  - pip install -r requirements.txt
- Run celery
  - $ celery -A main:celery worker -l INFO
- Run celery beat
  - $ celery -A main:celery beat -l INFO
- Run flask app
  - $ python3 main.py

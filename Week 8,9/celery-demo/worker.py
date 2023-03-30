from celery import Celery

celery = Celery('test')
celery.config_from_object("celeryconfig")

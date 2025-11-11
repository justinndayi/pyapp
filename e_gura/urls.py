# e_gura/urls.py
from django.urls import path
from . import views

app_name = 'e_gura'

urlpatterns = [
    path('', views.home, name='index'),
    # add other pages later: about, product detail, contact...
]

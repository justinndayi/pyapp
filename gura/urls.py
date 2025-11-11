from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='index'),      # http://127.0.0.1:8000/e_gura/
    path('about/', views.about, name='about'),  # http://127.0.0.1:8000/e_gura/about/
    path('shop/', views.shop, name='shop')
]
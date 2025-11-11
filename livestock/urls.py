from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('e_gura/', include('e_gura.urls')),
    path('', RedirectView.as_view(url='/e_gura/')),  # redirect root to /e_gura/
    
]


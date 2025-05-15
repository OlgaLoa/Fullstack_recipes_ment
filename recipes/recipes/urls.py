from django.contrib import admin
from django.urls import path, include
from recipes_back.views import *

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('recipes_back.urls')),   # http://127.0.0.1:8000/api/...
    #связываем с путями, начинающимися на api приложения recipes_app

]


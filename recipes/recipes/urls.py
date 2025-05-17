from django.contrib import admin
from django.urls import path, include
from recipes_back.views import *

# Настройка URL для доступа к Swagger UI
from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi



schema_view = get_schema_view(
    openapi.Info(
        title="OlgaLogunova API",
        default_version='v1',
        description="Welcome to the awesome API documentation!",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="olgalo-a@yandex.ru."),
        license=openapi.License(name="OLoa License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('recipes_back.urls')),   # http://127.0.0.1:8000/api/...
    #связываем с путями, начинающимися на api приложения recipes_app


    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    

]


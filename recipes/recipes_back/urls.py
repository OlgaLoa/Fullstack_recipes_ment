# создадим роутер для класса
from rest_framework import routers
from .views import RecipeViewSet, CategoryViewSet,recipes_by_category_view
from django.urls import path, include

# создадим объект роутера:
router = routers.DefaultRouter()
#(для api) нужно связать этот роутер с вьюсетом: 
# Здесь первым аргументом указана raw-строка «recipe» - это префикс (prefix) для URL-адреса,
# по которому будет доступен данный вьюсет.
# А вторым аргументом – сам класс
router.register(r'recipes', RecipeViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
   path('', include(router.urls)),
   # path('categories/', CategoryViewSet.as_view({'get': 'list'}), name='categories'), # список категорий фронт
   path('recipes_by_category/', recipes_by_category_view, name='recipes_of_category'),



]
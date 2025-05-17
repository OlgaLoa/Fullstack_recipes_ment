# нужно определить представление, которое будет срабатывать на запрос
from rest_framework import viewsets
from .serializers import *
from .models import Category, Recipe
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Существует два способа прямой реализации APIView: с помощью функции или с помощью класса. 
#для api  "GET /api/categories/ HTTP/1.1" 200 92
          #"GET /api/categories/1/ HTTP/1.1" 200 43
class CategoryViewSet(viewsets.ReadOnlyModelViewSet): # только для чтения
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

#для api http://localhost:8081/recipes/1
class RecipeViewSet(viewsets.ReadOnlyModelViewSet): # только чтение списка данных по GET-запросу;
    queryset = Recipe.objects.all()  # какие данные следует вернуть клиенту на соответствующий API-запрос
    serializer_class = RecipeSerializer
    
    # #рецепты по выбранной категории  fetch('http://127.0.0.1:8000/api/recipes/?category=1')
    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset

# @api_view это декоратор, который преобразует функциональное представление в APIView подкласс 
# (таким образом, предоставляя классы Response и Request). 
# В качестве аргумента он принимает список разрешенных методов для представления.
# фильтрация рецептов по категории 
#для api  "GET /api/recipes/?category=1 HTTP/1.1" 200 3037
@api_view(http_method_names=['GET'])
def recipes_by_category_view(request):
    if request.method == 'GET':
        category_id = request.query_params.get('category')
        #находим категорию по id из строки поиска
        category = Category.objects.get(id = category_id)
        #находим рецепты этой категории 
        recipes_by_category = Recipe.objects.filter(category_name = category) 
        serializer = CategorySerializer(recipes_by_category, many=True)
        return Response(serializer.data)   
    


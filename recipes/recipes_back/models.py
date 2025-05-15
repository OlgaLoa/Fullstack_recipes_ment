from django.db import models

# Create your models here.
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    unique_key = models.CharField(max_length=2, unique='true')

    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    time_create = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete = models.CASCADE)


    def __str__(self):
        return self.title

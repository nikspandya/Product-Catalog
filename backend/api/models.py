from django.db import models

# Database model for product
class Product(models.Model):
    name = models.CharField(unique=True, max_length=50)
    description = models.TextField(unique=False, max_length=300)
    price = models.FloatField(unique=False, max_length=25)
    picture = models.CharField(unique=False, max_length=100, blank=True)
    active = models.BooleanField()

    def __str__(self):
        return self.name

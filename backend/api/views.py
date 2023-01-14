from rest_framework import generics

from .models import Product
from .serializers import ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]

    filterset_fields = ['name', 'active']


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

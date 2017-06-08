from django.shortcuts import render
from .serializers import (ItemListSerializer)
from rest_framework.generics import (CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView)
from rest_framework.permissions import AllowAny
from main.models import Item


class ItemList(ListCreateAPIView):
    """
        Endpoint to List Expenses
    """
    serializer_class = ItemListSerializer
    permission_class = [AllowAny]
    queryset = Item.objects.all()


class ItemRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    """
        Endpoint to View, Update and Delete Expense
    """
    serializer_class = ItemListSerializer
    permission_class = [AllowAny]

    def get_queryset(self):
        return Item.objects.all()

from django.contrib import admin
from .models import Item


class ItemModelAdmin(admin.ModelAdmin):
    display_list = ['id','name', 'cost', 'purchased_date']
    search_fields = ['name']

admin.site.register(Item, ItemModelAdmin)

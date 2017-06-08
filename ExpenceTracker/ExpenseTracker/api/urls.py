from django.conf.urls import url
from .views import ItemList, ItemRetrieveUpdateDestroy

app_name = 'api'

urlpatterns = [
    url(r'^expenses/$', ItemList.as_view(), name='list'),
    url(r'^expenses/(?P<pk>[0-9]+)/$', ItemRetrieveUpdateDestroy.as_view(), name='detail'),
]

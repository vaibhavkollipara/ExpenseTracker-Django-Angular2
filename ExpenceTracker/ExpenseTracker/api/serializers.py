from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField
from main.models import Item


class ItemListSerializer(ModelSerializer):

    class Meta:
        model = Item
        fields = [
            'id',
            'name',
            'cost',
            'purchased_date',
            'url'
        ]

    url = HyperlinkedIdentityField(
        view_name='api:detail',
        lookup_field='pk'
    )

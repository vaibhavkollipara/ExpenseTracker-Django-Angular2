from __future__ import unicode_literals

from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=25)
    cost = models.DecimalField(max_digits=5, decimal_places=2)
    purchased_date = models.DateField(auto_now=False, auto_now_add=False)

    def __unicode__(self):
        return "{} : {}".format(self.name, self.cost)

    class Meta:
        ordering = [
            '-purchased_date'
        ]

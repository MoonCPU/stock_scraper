from django.contrib import admin
from .models import StockIndicator, NetGrowth

# Register your models here.
admin.site.register(StockIndicator)
admin.site.register(NetGrowth)
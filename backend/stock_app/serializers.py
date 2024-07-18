from rest_framework import serializers
from .models import StockIndicator, NetGrowth

class StockIndicatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockIndicator
        fields = '__all__'

class NetGrowthSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetGrowth
        fields = '__all__'
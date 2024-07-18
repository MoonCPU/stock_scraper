from django.db import models

class StockIndicator(models.Model):
    stock_code = models.CharField(max_length=10)
    indicator_name = models.CharField(max_length=100)
    # we're gonna convert them to float in the frontend
    indicator_value = models.CharField(max_length=100)  
    
    def __str__(self):
        return self.indicator_name

class NetGrowth(models.Model):
    stock_code = models.CharField(max_length=10)
    year = models.CharField(max_length=10)
    net_revenue = models.FloatField()
    net_profit = models.FloatField()
    net_worth = models.FloatField()
    
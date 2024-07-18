from django.urls import path, include
from . import views


urlpatterns = [
    path('scrape/<str:stock_code>/', views.scrape_and_return_data),
]
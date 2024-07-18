from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .indicators import scrape_indicators
from .netGrowth import scrape_netGrowth
#from .indicators_history import fetch_lpa_data

@api_view(['POST'])
def scrape_and_return_data(request, stock_code):
    if not stock_code:
        return Response({"error": "stock_code is required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Scrape indicators
        indicators_data = scrape_indicators(stock_code)

        # Scrape net growth
        net_growth_data = scrape_netGrowth(stock_code)
        
        #lpa_history_data = fetch_lpa_data(stock_code)

        # Prepare response data
        response_data = {
            "indicators": indicators_data,
            "net_growth": net_growth_data,
            #"lpa_history": lpa_history_data
        }

        return Response(response_data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
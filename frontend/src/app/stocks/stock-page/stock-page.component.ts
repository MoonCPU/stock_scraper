import { Component } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})

export class StockPageComponent {
  value = ''
  stockData: Stock = {} as Stock;
  stockCode: string = '';

  constructor(private stockService: StocksService){}

  getStockData(stockCode: string): void {
    this.stockService.getStockData(stockCode).subscribe(data => {
      this.stockData = data;
      console.log('Received stock data:', this.stockData);
    })
  }
}

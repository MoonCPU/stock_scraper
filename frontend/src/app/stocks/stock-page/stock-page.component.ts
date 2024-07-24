import { Component } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent {
  value = '';
  stockData: Stock[] = [];
  stockCode: string = '';
  goodIndicators: { name: string, value: any }[] = [];
  mediumIndicators: { name: string, value: any }[] = [];
  badIndicators: { name: string, value: any }[] = [];

  constructor(private stockService: StocksService) {}

  getStockData(stockCode: string): void {
    this.stockService.getStockData(stockCode).subscribe(data => {
      this.stockData.push(data);
      this.categorizeIndicators(data.indicators);
    });
  }

  categorizeIndicators(indicators: any): void {
    for (let key in indicators) {
      let value = indicators[key];

      switch (key) {
        case 'P/L':
          this.categorizeValue(parseFloat(value), 10, 15, key, value);
          break;
        case 'P/VP':
          this.categorizeValue(parseFloat(value), 1.5, 2.5, key, value);
          break;
        case 'LIQUIDEZ CORRENTE':
          this.categorizeValue(parseFloat(value), 1, 2, key, value, false);
          break;
        case 'DIVIDEND YIELD - OIBR3':
          if (value === '-' || parseFloat(value) < 2) {
            this.badIndicators.push({ name: key, value: value });
          } else if (parseFloat(value) < 5) {
            this.mediumIndicators.push({ name: key, value: value });
          } else if (parseFloat(value) <= 20) {
            this.goodIndicators.push({ name: key, value: value });
          }
          break;
        default:
          break;
      }
    }
  }

  categorizeValue(value: number, lowerBound: number, upperBound: number, key: string, originalValue: any, ascending: boolean = true): void {
    if (ascending) {
      if (value < lowerBound) {
        this.goodIndicators.push({ name: key, value: originalValue });
      } else if (value < upperBound) {
        this.mediumIndicators.push({ name: key, value: originalValue });
      } else {
        this.badIndicators.push({ name: key, value: originalValue });
      }
    } else {
      if (value < lowerBound) {
        this.badIndicators.push({ name: key, value: originalValue });
      } else if (value < upperBound) {
        this.mediumIndicators.push({ name: key, value: originalValue });
      } else {
        this.goodIndicators.push({ name: key, value: originalValue });
      }
    }
  }
}
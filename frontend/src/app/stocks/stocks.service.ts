import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private apiUrl = 'http://localhost:8000/api/scrape';

  constructor(private http: HttpClient) {}

  getStockData(stockCode: string): Observable<Stock> {
    return this.http.post<Stock>(`${this.apiUrl}/${stockCode}/`, {});
  }
}
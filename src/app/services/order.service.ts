import { Injectable } from '@angular/core';
import {Order} from '../my-objects/order';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class OrderService {
  private api = 'http://localhost:3000/orders';

  constructor(
    private loggerService: LoggerService, private http: HttpClient
  ) { }

  getOrdersByUserId(userId: number): Observable<Order[]> {
    this.loggerService.doLog('Get orders by userId=' + userId);
    return this.http.get<Order[]>(this.api + `?userId=${userId}`);
  }

  addNewOrder(order: Order): Observable<Order> {
    this.loggerService.doLogWittObject('Add new order:', order);
    return this.http.post<Order>(this.api, order);
  }
}

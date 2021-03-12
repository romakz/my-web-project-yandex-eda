import { Injectable } from '@angular/core';
import {Order} from '../my-objects/order';
import {LoggerService} from './logger.service';

@Injectable()
export class OrderService {
  orders: Order[] = [];

  constructor(
    private loggerService: LoggerService
  ) { }

  getOrdersByLogin(login: string): Order[] {
    let result: Order[] = [];

    for (let order of this.orders) {
      if (order.clientLogin === login) {
        result.push(order);
      }
    }

    this.loggerService.doLog('Get orders by login=' + login);
    return result;
  }

  addNewOrder(order: Order): void {
    this.loggerService.doLogWittObject('Add new order:', order);
    this.orders.push(order);
  }
}

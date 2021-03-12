import { Component, OnInit } from '@angular/core';
import {Order} from '../../../my-objects/order';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];
  clientLogin = 'romakz@gmail.com';

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orders = this.orderService.getOrdersByLogin(this.clientLogin);
  }
}

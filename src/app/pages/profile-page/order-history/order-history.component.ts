import { Component, OnInit } from '@angular/core';
import {Order} from '../../../my-objects/order';
import {OrderService} from '../../../services/order.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];
  clientLogin = 'romakz@gmail.com';

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdersByUserId(this.authService.getUserId()).subscribe(res => {
      this.orders = res;
    });
  }
}

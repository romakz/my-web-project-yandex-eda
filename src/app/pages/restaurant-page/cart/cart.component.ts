import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from '../../../my-objects/restaurant';
import {Product} from '../../../my-objects/product';
import {OrderService} from '../../../services/order.service';
import {Router} from '@angular/router';
import {Order} from '../../../my-objects/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalCost = 0;
  @Input() cartItems: Product[];
  @Input() restaurant: Restaurant;
  @Output() removeItemIndex = new EventEmitter<number>();
  showDelivery = false;
  clientLogin = 'romakz@gmail.com';

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  calculateTotalCost(): number {
    this.totalCost = 0;

    for (const item of this.cartItems) {
      this.totalCost += item.price;
    }

    if (this.totalCost !== 0 && this.totalCost < this.restaurant.freeDeliveryCost) {
      this.totalCost += this.restaurant.deliverCost;
      this.showDelivery = true;
    } else {
      this.showDelivery = false;
    }

    return this.totalCost;
  }

  remove(indexItem: number) {
    this.removeItemIndex.emit(indexItem);
  }

  makeOrder() {
    let cost = this.calculateTotalCost();

    if (cost !== 0) {
      let deliveryCost = this.showDelivery == true ? this.restaurant.deliverCost : 0;
      this.orderService.addNewOrder(new Order(this.clientLogin, cost, this.cartItems, this.showDelivery, deliveryCost, new Date()));
      this.router.navigate(['./profile/order-history']);
    }
  }
}

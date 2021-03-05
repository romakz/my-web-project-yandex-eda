import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from '../../../my-objects/restaurant';
import {Product} from '../../../my-objects/product';

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

  constructor() { }

  ngOnInit(): void {
  }

  calculateTotalCost(): number {
    this.totalCost = 0;

    for (let item of this.cartItems) {
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
}

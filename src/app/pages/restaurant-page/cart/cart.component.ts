import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../my-objects/restaurant';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalCost = 0;
  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }
}

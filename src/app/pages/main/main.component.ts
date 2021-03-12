import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../my-objects/restaurant';
import {RestaurantWithProductsArray} from '../../my-objects/restaurant-with-products-array';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  select: string;
  restaurants: Restaurant[] = [];
  searchArray: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.select = 'all';
    this.restaurants = this.getAllRestaurants();
  }

  setSelect(select: string) {
    if (select === 'all') {
      this.restaurants = this.restaurantService.getRestaurants();
    } else {
      this.restaurants = this.getRestaurantByTag(select);
    }

    this.select = select;
  }

  getAllRestaurants(): Restaurant[] {
    return this.restaurantService.getRestaurants();
  }

  getRestaurantByTag(tag: string): Restaurant[] {
    return this.restaurantService.getRestaurantsByTag(tag);
  }

  acceptSearchStr(str: string) {
    this.searchArray = this.restaurantService.getRestaurantsByName(str);
  }

}

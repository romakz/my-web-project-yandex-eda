import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../my-objects/restaurant';
import {RestaurantWithProductsArray} from '../../my-objects/restaurant-with-products-array';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  select: string;
  restaurants: Restaurant[] = [];
  restaurantsArray: RestaurantWithProductsArray = new RestaurantWithProductsArray();
  searchArray: Restaurant[] = [];

  constructor() { }

  ngOnInit(): void {
    this.select = 'all';
    this.restaurants = this.restaurantsArray.restaurantList;

    console.log(this.restaurantsArray);
  }

  setSelect(select: string) {

    if (select === 'all') {
      this.restaurants = this.getAllRestaurants();
    } else {
      this.restaurants = this.getRestaurantByTag(select);
    }

    this.select = select;
  }

  getAllRestaurants(): Restaurant[] {
    return this.restaurantsArray.restaurantList;
  }

  getRestaurantByTag(tag: string): Restaurant[] {
    let selectedRestaurants: Restaurant[] = [];

    for (let elem of this.restaurantsArray.restaurantList) {
      for (let productType of elem.productListType) {
        if (productType === tag) {
          console.log(tag);
          selectedRestaurants.push(elem);
        }
      }
    }

    return selectedRestaurants;
  }



  acceptSearchStr(str: string) {
    console.log('acccept: ' + str);
    let ansArray: Restaurant[] = [];

    for (let elem of this.restaurantsArray.restaurantList) {
      if (elem.name.includes(str)) {
        ansArray.push(elem);
        console.log("add: " + elem.name);
      }
    }

    console.log(ansArray);

    this.searchArray = ansArray;
  }

}

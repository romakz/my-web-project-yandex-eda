import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../my-objects/restaurant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  select: string;
  restaurants: Restaurant[] = [];
  restaurantsArray: Restaurant[] = [];
  searchArray: Restaurant[] = [];


  constructor() { }

  ngOnInit(): void {
    this.select = 'all';

    this.restaurantsArray.push(new Restaurant(1, 'Nori', 4.9, ['sets', 'sushi', 'drinks'], 'assets/images/restaurants/restaurant1.jpg'));
    this.restaurantsArray.push(new Restaurant(2, 'Mr. Burger', 4.4, ['combos', 'burgers'], 'assets/images/restaurants/restaurant2.jpg'));
    this.restaurantsArray.push(new Restaurant(3, 'Coffeessimo', 4.7, ['coffees', 'teas'], 'assets/images/restaurants/restaurant3.jpg'));
    this.restaurantsArray.push(new Restaurant(4, 'Burger Station', 4.8, ['burgers', 'drinks'], 'assets/images/restaurants/restaurant4.jpg'));
    this.restaurantsArray.push(new Restaurant(5, 'Шеф Бургер', 4.3, ['burgers', 'pizza'], 'assets/images/restaurants/restaurant5.jpeg'));
    this.restaurantsArray.push(new Restaurant(6, 'Киото Суши', 4.2, ['sets', 'sushi'], 'assets/images/restaurants/restaurant6.jpg'));
    this.restaurants = this.restaurantsArray;
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
    return this.restaurantsArray;
  }

  getRestaurantByTag(tag: string): Restaurant[] {
    let selectedRestaurants: Restaurant[] = [];

    for (let elem of this.restaurantsArray) {
      for (let productType of elem.productList) {
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

    for (let elem of this.restaurantsArray) {
      if (elem.name.includes(str)) {
        ansArray.push(elem);
        console.log("add: " + elem.name);
      }
    }

    console.log(ansArray);

    this.searchArray = ansArray;
  }

}

import { Injectable } from '@angular/core';
import {Restaurant} from '../my-objects/restaurant';
import {LoggerService} from './logger.service';

@Injectable()
export class RestaurantService {
  restaurants: Restaurant[] = [];

  constructor(
    private loggerService: LoggerService
  ) {
    this.restaurants.push(new Restaurant(1, 'Nori', 4.9, ['sets', 'sushi', 'drinks'], 'assets/images/restaurants/restaurant1.jpg', 1500, 1500, 990));
    this.restaurants.push(new Restaurant(2, 'Mr. Burger', 4.4, ['combos', 'burgers'], 'assets/images/restaurants/restaurant2.jpg',  1500, 1500, 990));
    this.restaurants.push(new Restaurant(3, 'Coffeessimo', 4.7, ['coffees', 'teas'], 'assets/images/restaurants/restaurant3.jpg',  1500, 1500, 990));
    this.restaurants.push(new Restaurant(4, 'Burger Station', 4.8, ['burgers', 'drinks'], 'assets/images/restaurants/restaurant4.jpg', 1500, 1500, 990));
    this.restaurants.push(new Restaurant(5, 'Шеф Бургер', 4.3, ['burgers', 'pizza'], 'assets/images/restaurants/restaurant5.jpeg', 1500, 1500, 990));
    this.restaurants.push(new Restaurant(6, 'Киото Суши', 4.2, ['sets', 'sushi'], 'assets/images/restaurants/restaurant6.jpg', 1500, 1500, 990));
  }

  getRestaurants(): Restaurant[] {
    this.loggerService.doLogWittObject('Get all restaurants', this.restaurants);
    return this.restaurants;
  }

  getRestaurantById(id: number) {
    let restaurant: Restaurant = null;

    for (let restaurant of this.restaurants) {
      if (restaurant.id === id) {
        this.loggerService.doLog('Get restaurant by id=' + id);
        return restaurant;
      }
    }

    this.loggerService.doLog('not fount restaurant by id=' + id);
    return restaurant;
  }

  getRestaurantsByTag(tag: string): Restaurant[] {
    let selectedRestaurants: Restaurant[] = [];

    for (let elem of this.restaurants) {
      for (let productType of elem.productListType) {
        if (productType === tag) {
          selectedRestaurants.push(elem);
        }
      }
    }

    this.loggerService.doLog('Get restaurants by tag=' + tag);
    return selectedRestaurants;
  }

  getRestaurantsByName(name: string): Restaurant[] {
    let ansArray: Restaurant[] = [];

    for (let elem of this.restaurants) {
      if (elem.name.includes(name)) {
        ansArray.push(elem);
      }
    }

    this.loggerService.doLog('get restaurant by name=' + name);
    return ansArray;
  }
}

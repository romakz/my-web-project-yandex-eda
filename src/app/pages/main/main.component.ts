import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../my-objects/restaurant';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  select: string;
  restaurants: Restaurant[] = [];
  restaurantsForSlider: Restaurant[] = [];
  searchArray: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.select = 'all';
    this.getAllRestaurants();
  }

  setSelect(select: string) {
    if (select === 'all') {
      this.getAllRestaurants();
    } else {
      this.getRestaurantByTag(select);
    }

    this.select = select;
  }

  getAllRestaurants() {
    this.restaurantService.getRestaurants().subscribe(res => {
      this.restaurants = res;
      this.restaurantsForSlider = res;
    });
  }

  getRestaurantByTag(tag: string) {
    this.restaurantService.getRestaurantsByTag(tag).subscribe(res => {
      this.restaurants = res;
    });
  }

  acceptSearchStr(str: string) {
    this.restaurantService.getRestaurantsByName(str).subscribe(res => {
      this.searchArray = res;
    });
  }

}

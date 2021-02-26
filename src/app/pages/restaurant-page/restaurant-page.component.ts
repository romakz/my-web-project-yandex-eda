import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../my-objects/restaurant';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantWithProductsArray} from '../../my-objects/restaurant-with-products-array';
import {Product} from '../../my-objects/product';
import {TagWithProductsList} from '../../my-objects/tag-with-products-list';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {
  imageUrl;
  restaurantId;
  restaurant: Restaurant;
  tagWithProductsList: TagWithProductsList = new TagWithProductsList();
  restaurantWithProductsArray: RestaurantWithProductsArray = new RestaurantWithProductsArray();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.restaurantId = +this.route.snapshot.paramMap.get('id');
    console.log('id res: ' + this.restaurantId);
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurant = this.restaurantWithProductsArray.restaurantList[this.restaurantId - 1];
    this.tagWithProductsList = this.restaurantWithProductsArray.tagWithProductsLists[this.restaurantId - 1];
    console.log(this.tagWithProductsList);
    this.imageUrl = `url("${this.restaurant.imageUrl}")`;
  }

}

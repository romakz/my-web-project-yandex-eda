import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../my-objects/restaurant';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../my-objects/product';
import {RestaurantService} from '../../services/restaurant.service';
import {TagWithProducts} from '../../my-objects/tag-with-products';
import {RestaurantProductsService} from '../../services/restaurant-products.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {
  imageUrl;
  restaurantId;
  restaurant: Restaurant;
  tagWithProducts: TagWithProducts[] = [];
  cartItems: Product[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private restaurantProductsService: RestaurantProductsService,
  ) { }

  ngOnInit(): void {
    this.restaurantId = +this.route.snapshot.paramMap.get('id');
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurant = this.restaurantService.getRestaurantById(this.restaurantId);
    this.tagWithProducts = this.restaurantProductsService.getProductsByProductTagsAndRestaurantId(this.restaurantId, this.restaurant.productListType);
    this.imageUrl = `url("${this.restaurant.imageUrl}")`;
  }

  toCart(product: Product) {
    this.cartItems.push(product);
  }

  removeProduct(indexItem: number) {
    let arr: Product[] = [];

    for (let i = 0; i < this.cartItems.length; i++) {
      if (i !== indexItem) {
        arr.push(this.cartItems[i]);
      }
    }

    this.cartItems = arr;
  }
}

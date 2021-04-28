import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from '../../pages/restaurant-page/cart/cart.component';
import {ProductCardComponent} from '../../pages/restaurant-page/product-card/product-card.component';
import {RestaurantPageComponent} from '../../pages/restaurant-page/restaurant-page.component';
import {ProductValueFormatPipe} from '../../pipes/product-value-format.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';

const restaurantRoutes: Routes = [
  {
    path: '', component: RestaurantPageComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
    ProductCardComponent,
    RestaurantPageComponent,
    ProductValueFormatPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forChild(restaurantRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RestaurantModule { }

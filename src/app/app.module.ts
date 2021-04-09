import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { CarouselComponent } from './pages/main/carousel/carousel.component';
import { SearchComponent } from './pages/main/search/search.component';
import {FormsModule} from '@angular/forms';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { ProductCardComponent } from './pages/restaurant-page/product-card/product-card.component';
import { CartComponent } from './pages/restaurant-page/cart/cart.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PaymentsComponent } from './pages/profile-page/payments/payments.component';
import { AddressesComponent } from './pages/profile-page/addresses/addresses.component';
import { OrderHistoryComponent } from './pages/profile-page/order-history/order-history.component';
import { PersonalInfoComponent } from './pages/profile-page/personal-info/personal-info.component';
import { ProductValueFormatPipe } from './pipes/product-value-format.pipe';
import {RestaurantService} from './services/restaurant.service';
import {RestaurantProductsService} from './services/restaurant-products.service';
import {OrderService} from './services/order.service';
import {MatTabsModule} from '@angular/material/tabs';
import {ClientService} from './services/client.service';
import { OrderCardComponent } from './pages/profile-page/order-history/order-card/order-card.component';
import {LoggerService} from './services/logger.service';
import {CardServiceService} from './services/card-service.service';
import { CreditCardComponent } from './pages/profile-page/payments/credit-card/credit-card.component';
import { AddCardComponent } from './pages/profile-page/payments/add-card/add-card.component';
import {AuthService} from './services/auth.service';
import {CanActiveProfilePageGuard} from './guards/can-active-profile-page.guard';
import {CanActiveChildProfilePageGuard} from './guards/can-active-child-profile-page.guard';
import {CanDeactivateCreditCardGuard} from './guards/can-deactivate-credit-card.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RestaurantCardComponent,
    CarouselComponent,
    SearchComponent,
    RestaurantPageComponent,
    ProductCardComponent,
    CartComponent,
    ProfilePageComponent,
    PaymentsComponent,
    AddressesComponent,
    OrderHistoryComponent,
    PersonalInfoComponent,
    ProductValueFormatPipe,
    OrderCardComponent,
    CreditCardComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [
    RestaurantService,
    RestaurantProductsService,
    OrderService,
    ClientService,
    LoggerService,
    CardServiceService,
    AuthService,
    CanActiveProfilePageGuard,
    CanActiveChildProfilePageGuard,
    CanDeactivateCreditCardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

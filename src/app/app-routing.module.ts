import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {RestaurantPageComponent} from './pages/restaurant-page/restaurant-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {PersonalInfoComponent} from './pages/profile-page/personal-info/personal-info.component';
import {AddressesComponent} from './pages/profile-page/addresses/addresses.component';
import {PaymentsComponent} from './pages/profile-page/payments/payments.component';
import {OrderHistoryComponent} from './pages/profile-page/order-history/order-history.component';
import {CanActiveProfilePageGuard} from './guards/can-active-profile-page.guard';
import {CanActiveChildProfilePageGuard} from './guards/can-active-child-profile-page.guard';
import {CanDeactivateCreditCardGuard} from './guards/can-deactivate-credit-card.guard';


const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'restaurant/:id', component: RestaurantPageComponent},
  {
    path: 'profile',
    component: ProfilePageComponent,
    children: [
      { path: 'personal-info', component: PersonalInfoComponent },
      {
        path: 'payments',
        component: PaymentsComponent,
        canDeactivate: [CanDeactivateCreditCardGuard]
      },
      { path: 'addresses', component: AddressesComponent },
      { path: 'order-history', component: OrderHistoryComponent },
    ],
    canActivate: [CanActiveProfilePageGuard],
    canActivateChild: [CanActiveChildProfilePageGuard]
  },
  { path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

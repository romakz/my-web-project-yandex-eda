import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
// import {RestaurantPageComponent} from './pages/restaurant-page/restaurant-page.component';
// import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
// import {PersonalInfoComponent} from './pages/profile-page/personal-info/personal-info.component';
// import {AddressesComponent} from './pages/profile-page/addresses/addresses.component';
// import {PaymentsComponent} from './pages/profile-page/payments/payments.component';
// import {OrderHistoryComponent} from './pages/profile-page/order-history/order-history.component';
// import {CanActiveProfilePageGuard} from './guards/can-active-profile-page.guard';
// import {CanActiveChildProfilePageGuard} from './guards/can-active-child-profile-page.guard';
// import {CanDeactivateCreditCardGuard} from './guards/can-deactivate-credit-card.guard';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'restaurant/:id',
    loadChildren: () => import('./module/restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./module/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

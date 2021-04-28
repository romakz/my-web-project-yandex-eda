import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilePageComponent} from '../../pages/profile-page/profile-page.component';
import {AddressesComponent} from '../../pages/profile-page/addresses/addresses.component';
import {OrderHistoryComponent} from '../../pages/profile-page/order-history/order-history.component';
import {PaymentsComponent} from '../../pages/profile-page/payments/payments.component';
import {PersonalInfoComponent} from '../../pages/profile-page/personal-info/personal-info.component';
import {OrderCardComponent} from '../../pages/profile-page/order-history/order-card/order-card.component';
import {CreditCardComponent} from '../../pages/profile-page/payments/credit-card/credit-card.component';
import {AddCardComponent} from '../../pages/profile-page/payments/add-card/add-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {CanDeactivateCreditCardGuard} from '../../guards/can-deactivate-credit-card.guard';
import {CanActiveProfilePageGuard} from '../../guards/can-active-profile-page.guard';
import {CanActiveChildProfilePageGuard} from '../../guards/can-active-child-profile-page.guard';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    canActivate: [CanActiveProfilePageGuard],
    canActivateChild: [CanActiveChildProfilePageGuard],
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoComponent
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        canDeactivate: [CanDeactivateCreditCardGuard]
      },
      {
        path: 'addresses',
        component: AddressesComponent
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    AddressesComponent,
    OrderHistoryComponent,
    PaymentsComponent,
    PersonalInfoComponent,
    OrderCardComponent,
    CreditCardComponent,
    AddCardComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatTabsModule,
        RouterModule.forChild(profileRoutes),
        ReactiveFormsModule
    ],
  exports: [
    RouterModule
  ]
})
export class ProfileModule { }

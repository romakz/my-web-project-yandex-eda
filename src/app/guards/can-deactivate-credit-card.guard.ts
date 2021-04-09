import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {PaymentsComponent} from '../pages/profile-page/payments/payments.component';

@Injectable()
export class CanDeactivateCreditCardGuard implements CanDeactivate<PaymentsComponent> {
  canDeactivate(
    component: PaymentsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.showAddNewCardDiv !== true || confirm('На странице есть несохраненные изменения. Продолжить?');
  }

}

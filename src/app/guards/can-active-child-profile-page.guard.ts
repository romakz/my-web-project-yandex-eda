import { Injectable } from '@angular/core';
import {CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class CanActiveChildProfilePageGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let authStatus = this.authService.isAuth();

    if (authStatus) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

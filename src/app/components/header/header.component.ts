import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  navToProfile() {
    this.router.navigate(['/profile/personal-info']);
  }

  login() {
    this.router.navigate(['/sign-in']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  getAuthStatus(): boolean {
    return this.authService.isAuth();
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }
}

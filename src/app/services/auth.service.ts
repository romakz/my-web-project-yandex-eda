import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private auth = false;

  constructor() { }

  isAuth(): boolean {
    return this.auth;
  }

  login() {
    this.auth = true;
  }

  logout() {
    this.auth = false;
  }
}

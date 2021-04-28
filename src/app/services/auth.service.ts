import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../my-objects/client';

@Injectable()
export class AuthService {
  private auth = false;
  private userId: number;
  private api = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {
    if (localStorage.getItem('userId')) {
      this.auth = true;
      this.userId = +localStorage.getItem('userId');
    }
  }

  isAuth(): boolean {
    return this.auth;
  }

  getByLoginAndPassword(data): Observable<Client[]> {
    return this.http.get<Client[]>(this.api + '?login=' + data.login + '&password=' + data.password);
  }

  getByLogin(data): Observable<Client[]> {
    return this.http.get<Client[]>(this.api + '?login=' + data.login);
  }

  logout() {
    this.auth = false;
    localStorage.removeItem('userId');
  }

  getUserId(): number {
    return this.userId;
  }

  setUserId(userId: number) {
    localStorage.setItem('userId', userId.toString());
    this.userId = userId;
    console.log('userId: ' + userId);
  }

  setAuth(status: boolean) {
    this.auth = status;
  }
}

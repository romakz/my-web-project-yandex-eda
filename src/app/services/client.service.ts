import { Injectable } from '@angular/core';
import {Client} from '../my-objects/client';
import {LoggerService} from './logger.service';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientService {
  private api = 'http://localhost:3000/clients';

  constructor(
    private loggerService: LoggerService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  getClient(userId: number): Observable<Client> {
    this.loggerService.doLog('get client by userId=' + userId);
    return this.http.get<Client>(this.api + `/${userId}`);
  }

  createNewClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.api, client);
  }
}

import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {Card} from '../my-objects/card';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CardServiceService {
  private api = 'http://localhost:3000/cards';

  constructor(private loggerService: LoggerService, private http: HttpClient) {}

  public getCardByUserId(userId: number): Observable<Card[]> {
    return this.http.get<Card[]>(this.api + `?userId=${userId}`);
  }

  public addNewCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.api, card);
  }

  public deleteCardById(cardId: number): Observable<any> {
    return this.http.delete<any>(this.api + `/${cardId}`);
  }
}

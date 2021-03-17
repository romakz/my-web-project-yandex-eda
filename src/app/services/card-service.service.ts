import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {Card} from '../my-objects/card';
import {log} from 'util';

@Injectable()
export class CardServiceService {
  cards: Card[] = [];

  constructor(
    private loggerService: LoggerService
  ) {
    this.initCards();
  }

  initCards() {
    this.cards.push(
      new Card(
        '1234-12341-234-1234',
        '2025-01-01',
        'Ramazan Alimzhan',
        '123',
        'romakz@gmail.com')
    );
  }

  getCardByLogin(login: string): Card[] {
    let result: Card[] = [];

    for (let card of this.cards) {
      if (card.clientLogin === login) {
        result.push(card);
      }
    }

    return result;
  }

  addNewCard(card: Card): void {
    this.cards.push(card);
  }

  deleteCard(card: Card) {
    let result: Card[] = [];

    for (let elem of this.cards) {
      if (elem !== card) {
        console.log('add');
        console.log('deded');
        console.log(card);
        result.push(elem);
      }
    }

    this.cards = result;
  }
}

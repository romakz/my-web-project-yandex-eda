import { Component, OnInit } from '@angular/core';
import {Card} from '../../../my-objects/card';
import {CardServiceService} from '../../../services/card-service.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  cards: Card[] = [];
  clientLogin = 'romakz@gmail.com';
  showAddNewCardDiv = false;

  constructor(
    private cardService: CardServiceService
  ) { }

  ngOnInit(): void {
    this.getCardsByLogin();
  }

  getCardsByLogin() {
    this.cards = this.cardService.getCardByLogin(this.clientLogin);
  }

  deleteCard(card: Card) {
    this.cardService.deleteCard(card);
    this.getCardsByLogin();
  }

  addNewCard() {
    this.showAddNewCardDiv = true;
  }

  saveNewCard(card: Card) {
    this.cardService.addNewCard(card);
    this.showAddNewCardDiv = false;
    this.getCardsByLogin();
  }

  closeAddCard(status: boolean) {
    if (status === false) {
      this.showAddNewCardDiv = false;
    }
  }
}

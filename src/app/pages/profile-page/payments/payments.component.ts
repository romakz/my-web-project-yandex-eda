import { Component, OnInit } from '@angular/core';
import {Card} from '../../../my-objects/card';
import {CardServiceService} from '../../../services/card-service.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  cards: Card[] = [];
  showAddNewCardDiv = false;

  constructor(
    private cardService: CardServiceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getCardsByUserId();
  }

  getCardsByUserId() {
    this.cardService.getCardByUserId(this.authService.getUserId()).subscribe(res => {
      this.cards = res;
    });
  }

  deleteCard(cardId: number) {
    this.cardService.deleteCardById(cardId).subscribe(res => {
      this.getCardsByUserId();
    });
  }

  addNewCard() {
    this.showAddNewCardDiv = true;
  }

  saveNewCard(card: Card) {
    this.cardService.addNewCard(card).subscribe(res => {
      this.getCardsByUserId();
      this.showAddNewCardDiv = false;
    });
  }

  closeAddCard(status: boolean) {
    if (status === false) {
      this.showAddNewCardDiv = false;
    }
  }
}

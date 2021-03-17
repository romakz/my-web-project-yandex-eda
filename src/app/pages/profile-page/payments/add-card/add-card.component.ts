import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Card} from '../../../../my-objects/card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  cardNumber: string;
  date: string;
  userFullName: string;
  cvc: string;
  clientLogin = 'romakz@gmail.com';
  @Output() saveAction = new EventEmitter<Card>();
  @Output() closeAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.cardNumber = '';
    this.date = '';
    this.userFullName = '';
    this.cvc = '';
  }

  saveCard() {
    this.saveAction.emit(new Card(this.cardNumber, this.date, this.userFullName, this.cvc, this.clientLogin));
  }

  close() {
    this.closeAction.emit(false);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../../../my-objects/card';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  @Input() card: Card;
  @Output() deleteAction = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCard() {
    console.log('delete');
    this.deleteAction.emit(this.card);
  }
}

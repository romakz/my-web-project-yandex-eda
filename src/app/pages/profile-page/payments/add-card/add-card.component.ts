import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Card} from '../../../../my-objects/card';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  cardForm: FormGroup;
  @Output() saveAction = new EventEmitter<Card>();
  @Output() closeAction = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cardForm = new FormGroup({
      cardNumber: new FormControl(''),
      date: new FormControl(''),
      userFullName: new FormControl(''),
      cvc: new FormControl(''),
      userId: new FormControl(this.authService.getUserId())
    });
  }

  saveCard() {
    this.saveAction.emit(this.cardForm.getRawValue());
  }

  close() {
    this.closeAction.emit(false);
  }
}

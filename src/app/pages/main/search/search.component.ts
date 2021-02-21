import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from '../../../my-objects/restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string = '';

  @Input() answer: Restaurant[];
  @Output() submitSearchStr = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.search = '';
  }

  find() {
    console.log("find: " + this.search);
    if (this.search !== '') {
      this.submitSearchStr.emit(this.search);
    } else {
      this.answer = [];
    }
  }
}

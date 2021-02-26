import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../my-objects/restaurant';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() restaurants: Restaurant[];
  showIndex = 3;

  constructor() { }

  ngOnInit(): void {
  }

  nextElem() {
    if (this.restaurants.length > this.showIndex) {
      this.showIndex += 3;
    }
  }

  prevElem() {
    if (3 < this.showIndex) {
      this.showIndex -= 3;
    }
  }

  isShow(i: number) {
    return ((this.showIndex - 3 <= i) && i < this.showIndex);
  }

}

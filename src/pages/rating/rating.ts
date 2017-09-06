import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
  rate: number = 0;

  constructor() {
  }

  onModelChange($event){
    console.log($event);
    console.log(this.rate);
  }

}

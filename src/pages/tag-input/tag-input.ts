import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tag-input',
  templateUrl: 'tag-input.html'
})
export class TagInputPage {
  items = ['TypeScript', 'Angular', 'Ionic'];
  items2 = ['TypeScript', 'Angular', 'Ionic'];
  items3 = ['TypeScript', 'Angular', 'Ionic'];
  items4 = ['TypeScript', 'Angular', 'Ionic'];
  items5 = ['TypeScript', 'Angular', 'Ionic'];
  items6 = ['TypeScript', 'Angular', 'Ionic'];
  constructor(public navCtrl: NavController) {

  }

  tagStrVerify(str: string): boolean {
    return str !== 'ABC' && str.trim() !== '';
  }

  onChange(val) {
    console.log(val)
  }

}

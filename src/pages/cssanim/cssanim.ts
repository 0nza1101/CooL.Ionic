import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cssanim',
  templateUrl: 'cssanim.html'
})
export class CssanimPage {
  @ViewChild('player') player;
  constructor(public navCtrl: NavController) {

  }

  reloadAnim(){
    //Creepy func cause im lazy :/
    window.location.reload();
  }

}

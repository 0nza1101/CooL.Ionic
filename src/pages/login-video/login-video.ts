import { NavController, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-login-video',
  templateUrl: 'login-video.html'
})
export class LoginVideoPage {


  constructor(public navCtrl: NavController) {

  }

  login(): void {
    window.alert('Login clicked')
  }

}

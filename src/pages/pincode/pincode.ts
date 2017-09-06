import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PincodeController } from  'ionic2-pincode-input/dist/pincode'

@IonicPage()
@Component({
  selector: 'page-pincode',
  templateUrl: 'pincode.html',
})
export class PincodePage {

  code: string;

  constructor(public navCtrl: NavController, public pincodeCtrl: PincodeController) {
  }

  openPinCode(): any {
    let pinCode = this.pincodeCtrl.create({
      passSize: 4,
      title: 'Pincode',
      cancelButtonText: 'cancel',
      forgotPasswordText: 'Let me remember',
      hideForgotPassword: false,
      hideCancelButton: false,
      enableBackdropDismiss: true
    });

    pinCode.present();

    pinCode.onDidDismiss((code, status) => {

      if (status === 'done') {
        this.code = code;
      } else if (status === 'forgot') {

        // forgot password
      }
    })
  }

}

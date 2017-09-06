import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginVideoPage } from './login-video';


@NgModule({
  declarations: [
    LoginVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginVideoPage),
  ],
})
export class LoginVideoPageModule {}

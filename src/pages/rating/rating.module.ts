import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingPage } from './rating';
import { Ionic2RatingModule } from 'ionic2-rating'; // npm install --save ionic2-rating

@NgModule({
  declarations: [
    RatingPage,
  ],
  imports: [
    Ionic2RatingModule,
    IonicPageModule.forChild(RatingPage),
  ],
})
export class RatingPageModule {}

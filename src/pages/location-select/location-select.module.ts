import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationSelectPage } from './location-select';

@NgModule({
  declarations: [
    LocationSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationSelectPage),
  ],
})
export class LocationSelectPageModule {}

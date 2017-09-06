import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebAnimApiPage } from './web-anim-api';


@NgModule({
  declarations: [
    WebAnimApiPage,
  ],
  imports: [
    IonicPageModule.forChild(WebAnimApiPage),
  ],
})
export class WebAnimApiPageModule {}

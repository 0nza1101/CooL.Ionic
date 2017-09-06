import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxHeaderPage } from './parallax-header';

import { DIRECTIVES } from '../../app/app.imports';

@NgModule({
  declarations: [
    ParallaxHeaderPage,
  ],
  imports: [
    DIRECTIVES,
    IonicPageModule.forChild(ParallaxHeaderPage),
  ],
})
export class ParallaxHeaderPageModule {}

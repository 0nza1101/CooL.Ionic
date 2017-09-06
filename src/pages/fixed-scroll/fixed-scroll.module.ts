import { FixedScrollPage } from './fixed-scroll';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DIRECTIVES } from '../../app/app.imports';

@NgModule({
  declarations: [
    FixedScrollPage,
  ],
  imports: [
    DIRECTIVES,
    IonicPageModule.forChild(FixedScrollPage),
  ],
  exports: [
    FixedScrollPage
  ]
})

export class FixedScrollPageModule { }

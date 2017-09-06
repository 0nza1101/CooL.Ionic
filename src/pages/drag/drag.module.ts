import { DragPage } from './drag';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DIRECTIVES } from '../../app/app.imports';

@NgModule({
  declarations: [
    DragPage,
  ],
  imports: [
    DIRECTIVES,
    IonicPageModule.forChild(DragPage),
  ],
  exports: [
    DragPage
  ]
})

export class HomePageModule { }

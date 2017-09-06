import { DrawingPage } from './drawing';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { COMPONENTS } from '../../app/app.imports';

@NgModule({
  declarations: [
    DrawingPage,
  ],
  imports: [
    COMPONENTS,
    IonicPageModule.forChild(DrawingPage),
  ],
  exports: [
    DrawingPage
  ]
})

export class DrawingPageModule { }

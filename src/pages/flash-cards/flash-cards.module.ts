import { FlashCardsPage } from './flash-cards';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { COMPONENTS } from '../../app/app.imports';

@NgModule({
  declarations: [
    FlashCardsPage,
  ],
  imports: [
    COMPONENTS,
    IonicPageModule.forChild(FlashCardsPage),
  ],
  exports: [
    FlashCardsPage
  ]
})

export class FlashCardsPageModule { }

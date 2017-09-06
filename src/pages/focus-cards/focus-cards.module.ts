import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FocusCardsPage } from './focus-cards';

import { DIRECTIVES } from '../../app/app.imports';

@NgModule({
  declarations: [
    FocusCardsPage,
  ],
  imports: [
    DIRECTIVES,
    IonicPageModule.forChild(FocusCardsPage),
  ],
})
export class FocusCardsPageModule {}

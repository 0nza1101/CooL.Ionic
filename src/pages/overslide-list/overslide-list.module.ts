import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverSlideListPage } from './overslide-list';

import { DIRECTIVES } from '../../app/app.imports';

@NgModule({
  declarations: [
    OverSlideListPage,
  ],
  imports: [
    DIRECTIVES,
    IonicPageModule.forChild(OverSlideListPage),
  ],
})
export class DragPageModule {}

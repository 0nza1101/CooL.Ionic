import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectListPage } from './select-list';

@NgModule({
  declarations: [
    SelectListPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectListPage),
  ],
})
export class SelectListPageModule {}

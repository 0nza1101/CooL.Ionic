import { AccordionListPage } from './accordion-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { COMPONENTS } from '../../app/app.imports';

@NgModule({
  declarations: [
     AccordionListPage,
  ],
  imports: [
    COMPONENTS,
    IonicPageModule.forChild(AccordionListPage),
  ],
  exports: [
     AccordionListPage
  ]
})

export class  AccordionListPageModule { }

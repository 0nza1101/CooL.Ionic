import { CssanimPage } from './cssanim';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CssanimPage,
  ],
  imports: [
    IonicPageModule.forChild(CssanimPage),
  ],
  exports: [
    CssanimPage
  ]
})

export class CssanimPageModule { }

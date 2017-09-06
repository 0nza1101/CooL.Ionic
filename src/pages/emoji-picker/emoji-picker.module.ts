import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmojiPickerPage } from './emoji-picker';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';// npm i @ionic-tools/emoji-picker --save

@NgModule({
  declarations: [
    EmojiPickerPage,
  ],
  imports: [
    EmojiPickerModule,
    IonicPageModule.forChild(EmojiPickerPage),
  ],
})
export class EmojiPickerPageModule {}

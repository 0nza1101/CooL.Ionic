import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagInputPage } from './tag-input';
import { IonTagsInputModule } from "ionic-tags-input"; // npm install ionic-tags-input --save


@NgModule({
  declarations: [
    TagInputPage,
  ],
  imports: [
    IonTagsInputModule,
    IonicPageModule.forChild(TagInputPage),
  ],
})
export class TagInputPageModule {}

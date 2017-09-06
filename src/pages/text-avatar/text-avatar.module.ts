import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextAvatarPage } from './text-avatar';

import { DIRECTIVES } from '../../app/app.imports';

@NgModule({
  declarations: [
    TextAvatarPage,
  ],
  imports: [
    DIRECTIVES,
    IonicPageModule.forChild(TextAvatarPage),
  ],
})
export class TextAvatarPageModule {}

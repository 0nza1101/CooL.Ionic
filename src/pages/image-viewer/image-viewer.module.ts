import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageViewerPage } from './image-viewer';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    ImageViewerPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(ImageViewerPage),
  ],
})
export class ImageViewerPageModule {}

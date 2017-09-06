import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { FlashcardsComponent } from './flashcards/flashcards';
import { ExpandableComponent } from './expandable/expandable';
import { CanvasDrawComponent } from './canvas-draw/canvas-draw';

@NgModule({
	declarations: [FlashcardsComponent, ExpandableComponent,
    CanvasDrawComponent],
	imports: [IonicModule],
	exports: [FlashcardsComponent, ExpandableComponent,
    CanvasDrawComponent]
})
export class ComponentsModule {}

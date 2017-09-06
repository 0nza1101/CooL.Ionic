import { Component, Renderer } from '@angular/core';

/**
 * Generated class for the FlashcardsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flashcards.html'
})
export class FlashcardsComponent {
  flipped: boolean = false;

  constructor(public renderer: Renderer) {
  }

  flip(){
    this.flipped=!this.flipped;
  }

}

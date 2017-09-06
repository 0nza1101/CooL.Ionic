import { Directive, ContentChildren, Renderer, ElementRef } from '@angular/core';
import { Card, DomController } from 'ionic-angular';

@Directive({
  selector: '[focusCards]',
  host: {
    '(press)': 'onPress()'
  }
})
export class FocusCardsDirective {

  @ContentChildren(Card, { read: ElementRef }) cards;
  tappedCard: any;
  focusedCard: boolean = false;

  constructor(public renderer: Renderer, public domCtrl: DomController) {

  }

  ngAfterViewInit() {

    this.cards.forEach((card) => {
      this.renderer.listen(card.nativeElement, 'touchstart', (ev) => {

        if (this.focusedCard) {
          this.resetStyle();
        }

        this.tappedCard = card;

      });
    });

  }

  onPress() {

    this.focusedCard = true;

    this.domCtrl.write(() => {
      this.cards.forEach((card) => {
        if (card !== this.tappedCard) {
          this.domCtrl.write(() => {
            this.renderer.setElementStyle(card.nativeElement, 'opacity', '0.4');
          });
        }
      });
    });

  }

  resetStyle() {

    this.focusedCard = false;

    this.cards.forEach((card) => {
      this.domCtrl.write(() => {
        this.renderer.setElementStyle(card.nativeElement, 'opacity', '1');
      });
    });

  }

}

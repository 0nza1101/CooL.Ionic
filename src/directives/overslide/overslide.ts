import { Directive, Output, ElementRef, Renderer, EventEmitter } from '@angular/core';

@Directive({
	selector: '[overslide]',
	host: {
		'(ionDrag)': 'handleDrag($event)'
	}
})

export class OverslideDirective {

	@Output() overslide: any = new EventEmitter();

	triggered: boolean = false;

	constructor(public element: ElementRef, public renderer: Renderer) {
	}

	handleDrag(ev){

		//Check if the slider is triggered and accors 1.9 percent
		if(Math.abs(ev.getSlidingPercent()) > 1.9 && !this.triggered){

			this.triggered = true;

			//Apply transition
			this.renderer.setElementStyle(this.element.nativeElement, 'transition', '0.3s linear');
			this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '0');

			setTimeout(() => {
				this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
				this.overslide.emit(true);
			}, 300);

		}

	}

}

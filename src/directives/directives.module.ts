import { NgModule } from '@angular/core';
import { OverslideDirective } from './overslide/overslide';
import { AbsoluteDragDirective } from './absolute-drag/absolute-drag';
import { ElasticHeaderDirective } from './elastic-header/elastic-header';
import { TextAvatarDirective } from './text-avatar/text-avatar';
import { FocusCardsDirective } from './focus-cards/focus-cards';
import { FixedScrollDirective } from './fixed-scroll/fixed-scroll';


@NgModule({
	declarations: [OverslideDirective, AbsoluteDragDirective, ElasticHeaderDirective, TextAvatarDirective,
    FocusCardsDirective, FixedScrollDirective],
	imports: [],
	exports: [OverslideDirective, AbsoluteDragDirective, ElasticHeaderDirective, TextAvatarDirective,
    FocusCardsDirective, FixedScrollDirective]
})
export class DirectivesModule {}

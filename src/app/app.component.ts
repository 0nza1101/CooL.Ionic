import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation lazy loading
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'CSS basic animations', component: 'CssanimPage' },
      { title: 'Location select', component: 'LocationSelectPage' },
      { title: 'Login video', component: 'LoginVideoPage' },
      { title: 'Overslide list', component: 'OverSlideListPage' },
      { title: 'Selectable list', component: 'SelectListPage' },
      { title: 'Absolute drag', component: 'DragPage' },
      { title: 'Accordion list', component: 'AccordionListPage' },
      { title: 'Parallax header', component: 'ParallaxHeaderPage' },
      { title: 'Web animation API', component: 'WebAnimApiPage' },
      { title: 'Text avatar', component: 'TextAvatarPage' },
      { title: 'Focus cards', component: 'FocusCardsPage' },
      { title: 'Fixed scroll', component: 'FixedScrollPage' },
      { title: 'Flash card', component: 'FlashCardsPage' },
      { title: 'Emoji picker', component: 'EmojiPickerPage' },
      { title: 'Drawing', component: 'DrawingPage' },
      { title: 'Tag input', component: 'TagInputPage' },
      { title: 'Rating', component: 'RatingPage' },
      { title: 'PinCode', component: 'PincodePage' },
      { title: 'Image viewer', component: 'ImageViewerPage' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

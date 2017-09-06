import './polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Ionic / Angular Providers:
import {
  App,
  Config,
  DomController,
  Form,
  GestureController,
  Haptic,
  IonicModule,
  Keyboard,
  LoadingController,
  MenuController,
  ModalController,
  NavController,
  NavParams,
  Platform
} from 'ionic-angular';

// Mocks:
import { ConfigMock, NavParamsMock, PlatformMock } from './mocks';
import { HapticMock, LoadingControllerMock, ModalControllerMock } from 'ionic-mocks';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function(): void {
  // noop
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
// Then we find all the tests.
const context: any = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
__karma__.start();

/**
 * This class will be imported into your individual tests - and provide dependencies and mocked dependencies
 * @class TestUtils
 */
export class TestUtils {

  public static beforeEachCompiler(components: Array<any>): Promise<{ fixture: any, instance: any }> {
    return TestUtils.configureIonicTestingModule(components)
      .compileComponents().then(() => {
        let fixture: any = TestBed.createComponent(components[0]);
        return {
          fixture: fixture,
          instance: fixture.debugElement.componentInstance,
        };
      });
  }

  public static configureIonicTestingModule(components: Array<any>): typeof TestBed {

    return TestBed.configureTestingModule({
      declarations: [
        ...components,
      ],
      providers: [
        App,
        DomController,
        Form,
        GestureController,
        Keyboard,
        MenuController,
        NavController,
        { provide: Config, useClass: ConfigMock },
        { provide: Haptic, useClass: HapticMock },
        { provide: LoadingController, useClass: LoadingControllerMock },
        { provide: ModalController, useClass: ModalControllerMock },
        { provide: NavParams, useClass: NavParamsMock },
        { provide: Platform, useClass: PlatformMock }
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    });
  }

  // http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
  public static eventFire(el: any, etype: string): void {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      let evObj: any = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
}

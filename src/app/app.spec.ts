import {} from 'jasmine';//For atom linter
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ErrorHandler } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Main import definitions DIRECTIVES, PIPES and COMPONENTS should not be declared here but indside pageName.module.ts
import { MODULES, PROVIDERS } from './app.imports';

import { MyApp } from './app.component';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp],

            providers: [PROVIDERS, {provide: ErrorHandler, useClass: IonicErrorHandler},],

            imports: [
                MODULES,
                IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(MyApp);
        comp    = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });

    it('initialises with a root page of HomePage', () => {
        expect(comp['rootPage']).toBe('HomePage');//LazyLoadingSyntax
    });

});

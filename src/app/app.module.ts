import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//Main import definitions DIRECTIVES, PIPES and COMPONENTS should not be declared here but indside pageName.module.ts
import { MODULES, PROVIDERS } from './app.imports';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [PROVIDERS, {provide: ErrorHandler, useClass: IonicErrorHandler},]
})
export class AppModule {}

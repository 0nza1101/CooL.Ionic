// Ionic native providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';

import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity-service';

// Components
import { ComponentsModule } from '../components/components.module';

// Directives
import { DirectivesModule } from '../directives/directives.module';

// Pipes

//Module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { PincodeInputModule } from  'ionic2-pincode-input';
import { IonicImageViewerModule } from 'ionic-img-viewer';

export const PROVIDERS = [
  // Ionic native specific providers
  StatusBar,
  SplashScreen,
  Geolocation,
  Network,

  GoogleMaps,
  Connectivity,
];

export const COMPONENTS = [
  ComponentsModule,
];

export const DIRECTIVES = [
  DirectivesModule,
];

export const PIPES = [

];

export const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpModule,
  CommonModule,
  PincodeInputModule,
  IonicImageViewerModule,
];

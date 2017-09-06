import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Network } from '@ionic-native/network';

/**
Network Type possible value : unknown, ethernet, wifi, 2g, 3g, 4g, cellular, none
**/
declare var Connection;

@Injectable()
export class Connectivity {

  onDevice: boolean;

  constructor(public platform: Platform, public network: Network){
    this.onDevice = this.platform.is('cordova');
  }

  //Device is online ?
  isOnline(): boolean {
    //If we are on cordova platform and net type not null
    if(this.onDevice && this.network.type){
      return this.network.type != 'none';
    } else {
      return navigator.onLine;
    }
  }

  //Device is offline ?
  isOffline(): boolean {
    if(this.onDevice && this.network.type){
      return this.network.type == 'none';
    } else {
      return !navigator.onLine;
    }
  }

  watchOnline(): any {
    return this.network.onConnect();
  }

  watchOffline(): any {
    return this.network.onDisconnect();
  }

}

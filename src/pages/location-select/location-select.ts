import { NavController, Platform, ViewController, IonicPage } from 'ionic-angular';
import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '../../providers/google-maps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-location-select',
  templateUrl: 'location-select.html'
})
export class LocationSelectPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  latitude: number;
  longitude: number;
  autocompleteService: any;
  placesService: any;
  query: string = '';
  places: any = [];
  searchDisabled: boolean;
  saveDisabled: boolean;
  location: any;

  constructor(public navCtrl: NavController, public zone: NgZone, public maps: GoogleMaps, public platform: Platform, public geolocation: Geolocation, public viewCtrl: ViewController) {
    this.searchDisabled = true;
    this.saveDisabled = true;
  }

  ionViewDidLoad(): void {
    //Init map and fill service
    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.placesService = new google.maps.places.PlacesService(this.maps.map);
      this.searchDisabled = false;

    });

  }

  //Triggered on a place selection from list
  selectPlace(place) {
    //Free places list
    this.places = [];
    //Free location details
    let location = {
      lat: null,
      lng: null,
      name: place.name
    };

    //Get selected place details
    this.placesService.getDetails({ placeId: place.place_id }, (details) => {

      this.zone.run(() => {
        //Set full adress inside input field
        this.query = details.formatted_address;

        //Fill location details
        location.name = details.name;
        location.lat = details.geometry.location.lat();
        location.lng = details.geometry.location.lng();
        this.saveDisabled = false;
        //Center the map with selected place location
        this.maps.map.setCenter({ lat: location.lat, lng: location.lng });

        let marker = new google.maps.Marker({
          map: this.maps.map,
          animation: google.maps.Animation.BOUNCE,
          position: new google.maps.LatLng(location.lat, location.lng)
        });

        this.location = location;
      });

    });

  }

  //Triggered when user input the searchbar
  searchPlace() {
    this.saveDisabled = true;

    //If input is not null and searchbar activated
    if (this.query.length > 0 && !this.searchDisabled) {

      let config = {
        types: ['geocode'],
        input: this.query
      }

      this.autocompleteService.getPlacePredictions(config, (predictions, status) => {

        //If we got valid predictions
        if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
          //Free place array
          this.places = [];
          //Push founded place into array
          predictions.forEach((prediction) => {
            this.places.push(prediction);
          });
        }

      });

    } else {
      this.places = [];
    }

  }

  save() {
    //You can do here some data proccessing, backend callz whatever you want
    //this.location
  }

}

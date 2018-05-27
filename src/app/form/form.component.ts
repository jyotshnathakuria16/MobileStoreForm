import { Component, OnInit, ElementRef, ViewChild, EventEmitter, NgZone } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';


import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f') storeForm: NgForm;
  user= {
    storeName: '',
    storeEmail: '',
    storeDescription: '',
    location: ''
  };
  submitted= false;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  onSubmit(){
    this.submitted=true;
    this.user.storeName = this.storeForm.value.storeName;
    this.user.storeEmail = this.storeForm.value.storeEmailId;
    this.user.storeDescription = this.storeForm.value.storeDescription;
    this.user.location = this.storeForm.value.location;
}
@ViewChild("search")
public searchElementRef: ElementRef;

constructor(
  private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone
) {}

ngOnInit() {
  //set google maps defaults
  this.zoom = 4;
  this.latitude = 39.8282;
  this.longitude = -98.5795;

  //create search FormControl
  this.searchControl = new FormControl();

  //set current position
  this.setCurrentPosition();

  //load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ["address"]
    });
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
      });
    });
  });
}

private setCurrentPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 12;
    });
  }
}
}

import { Injectable, OnInit, NgZone } from '@angular/core';
 import { Observable } from 'rxjs';
 import {map} from 'rxjs/operators';
 import {Geolocation} from '@ionic-native/geolocation/ngx';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';


declare var google:any;

@Injectable({
  providedIn: 'root'
})
export class LocationService implements OnInit{

  public autoCompleteService:any;

  currentLat:number;
  currentLon:number;



  constructor(private mapsAPILoader:MapsAPILoader,private mapsWrapper:GoogleMapsAPIWrapper,private geolocation:Geolocation){
    console.log("Constror service location")
  this.mapsAPILoader.load().then(()=>{
    this.autoCompleteService=new 
    google.maps.places.AutocompleteService();

  });
  }


  calculateDistance(from:any,to:any):number {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(from,to);
    return distance;
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then(resp=>{
       this.currentLat=resp.coords.latitude;
      this.currentLon=resp.coords.longitude;
      console.log("Lat is "+this.currentLat);
      console.log("Lon is "+this.currentLon);
    });
  }

  getPredictions(searchTerm:string):Observable<any[]>{
    console.log("In the service location ")
    return Observable.create(observer=>{
      this.autoCompleteService.getPlacePredictions({input:searchTerm},data =>{
        let previousData:Array<any[]>;
        if(data){
          console.log(data);
          previousData=data;
          observer.next(data);
          observer.complete();
        }

        if(!data){
          console.log("PreviousData: ");
          observer.next(previousData);
          observer.complete();
        }else{

          observer.error(status);
          
        }


      })
    })

  }

  
ngOnInit(){
  this.getCurrentLocation();
}












}

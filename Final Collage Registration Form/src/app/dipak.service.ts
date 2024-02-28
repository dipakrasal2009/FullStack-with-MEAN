import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DipakService {

  Value : any;
  Value1 : any;
  constructor(private http : HttpClient) { }

  sendData(Data : any)
  {
    var Value = {params : Data}
    console.log(Value);
    return this.http.get<any>('http://localhost:3000/AddData',Value);

  }

  //getData()
  //{
   //return this.http.get('http://localhost:3000/Data');//.subscribe(data => {
    //this.Value1 = data;

    //return this.Value1;
   //});

  //}


}

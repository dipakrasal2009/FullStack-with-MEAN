import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DipakService {

  Value : any;
  constructor(private http : HttpClient) { }

  sendData(Data : any)
  {
    this.Value = {params : Data}
    console.log(this.Value);
    return this.http.get<any>('http://localhost:3000/AddData',this.Value);

  }


}

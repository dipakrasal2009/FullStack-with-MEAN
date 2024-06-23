import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RasalService {
Data :any;
  constructor(private http : HttpClient) { }


  getData()
  {
   return this.http.get('http://localhost:3000/Data');
  }

  // getData()
  // {
  //   this.http.get('http://localhost:3000/Data').subscribe(res=>{
  //     this.Data = res;
  //     //console.log(this.Data);
  //     return this.Data;
  //   })
  // }

}

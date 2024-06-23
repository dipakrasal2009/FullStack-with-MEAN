import { Component, OnInit } from '@angular/core';
import { DipakService } from '../dipak.service';
import { RasalService } from '../rasal.service';

@Component({
  selector: 'app-display-db',
  templateUrl: './display-db.component.html',
  styleUrl: './display-db.component.css'
})
export class DisplayDBComponent //implements OnInit
{
  

  // myObject:any = {
  //   key1: 'value1',
  //   key2: 'value2',
  //   key3: 'value3'
  // };
  
  // myArray:any = Object.keys(this.myObject).map(key => ({ key: key, value: this.myObject[key] }));
  


  Data : any;

  constructor(private service : RasalService){}

  ngOnInit()
  {
    this.service.getData().subscribe(res =>{
      this.Data = res;
      //console.log(this.Data)
    });
  }

  // ngOnInit()
  // {
  //   // this.Data = this.service.getData();
  //   // console.log(this.Data);
  //   this.myArray = this.service.getData();

  // }

}

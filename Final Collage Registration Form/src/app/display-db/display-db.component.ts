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

  Data : any;

  constructor(private service : RasalService){}

  ngOnInit()
  {
    this.service.getData().subscribe(res =>{
      this.Data = res;
    });
  }

}

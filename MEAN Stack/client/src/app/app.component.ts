import { Component,OnInit } from '@angular/core';
import { DipakService } from './dipak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  message : any;

  constructor(private service : DipakService)
  {
     
  }
  ngOnInit()
  {
    this.service.getBatches().subscribe(data=> {
      this.message = data;
    })
  }

  
}

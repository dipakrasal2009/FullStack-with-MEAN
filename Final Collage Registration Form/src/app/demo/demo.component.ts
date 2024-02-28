import { Component, OnInit } from '@angular/core';
//import { NgModel } from '@angular/forms';
import { DipakService } from '../dipak.service';
import { FormBuilder,Validators } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
//import { NgModel } from '@angular/forms';
//import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-demo',
  //imports :[NgModel],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [FormBuilder,Validators]
})
export class DemoComponent implements OnInit 
{

  signupForm!: FormGroup;

  //public Array : any = [];
  inf : any;
  Message : any;
  constructor(private service : DipakService,private formbuilder: FormBuilder){}


  ngOnInit()
  {
    this.signupForm = this.formbuilder.group({
      email:['',Validators.required],
      name:['',Validators.required],
      mobile:['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      Class:['',Validators.required],
      Age:['',Validators.required],
      Gender:['',Validators.required]

    })

    //console.log(this.signupForm);
  }

  Display()
  {

    this.Message = this.signupForm.value;

    //console.log(this.Message);

    var Mes : any = "Congratulation";

    this.service.sendData(this.Message).subscribe(data =>{
    this.inf = data;
    });

    
    
    //this.service.getData().subscribe(data => {
      //this.inf = data;
    //});
  //this._http.post<any>('http://localhost:3000/signup',this.signupForm.value)
  //this.

  //alert('Signup Successfully');
    //  this.signupForm.reset();
      //this._router.navigate(['/login']);
    //}), (err: any)=>{
      //console.log(err);
      //alert('Signup Error');
    
  }
}


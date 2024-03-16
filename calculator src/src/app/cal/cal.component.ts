import { Component } from '@angular/core';
//import { isNumber } from 'util';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrl: './cal.component.css'
})
export class CalComponent 
{
  // expression is a normal veriableto accept data from the html
    expression:any;

    // answer veriable is use to pass the executed ansewer in the html and Display it using Interpolation topic in Angular
    answer : any;

    // number string contains the Digits using this string i will create the digits buttons
    number: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // operators string is contains the operator in addition substraction multiplication division and create it buttons
    operators: string[] = ['+', '-', '*', '/'];

    //that function is use to accept the input and concatinete the value
    appendToExpression(value: string) 
    {
      this.expression += value;
    }

    // that function is use to clear the input feild
    clear()
    {
      this.expression = '';
    }

    //execute function is use to execute the arithmetic operatio
    execute()
    {
      //if your input is valid then you will enter the try block
      try 
      {
        //eval is an inbuilt library function in typescript and javascript
        //that is evaluate all the arithmetic operation
        this.answer = eval(this.expression);
      }

      //if your input is invalid then you will enter the catch block
      catch (error) 
      {
        this.expression = 'Error';
      }
    }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}

  task2Form: FormGroup;

  // we convert string number array to this number(integer) array
  formValue: number;

  // value of this variable is our final result
  result;

  // getter, we use this in our app.component.html file
  get number (){
    return this.task2Form.get('number');
  }

  // here i get form value
  ngOnInit(){
    this.task2Form = this.formBuilder.group({
      number: ['',[Validators.required]]
    })
  }
  
  // all my solution in this here
  onGetLetter(){
    // each time we assign to null our result
    this.result = null;

    // assing value which we get from input
    this.formValue = +this.task2Form.value.number;

    // always reset our input when chick to Get Result button
    this.task2Form.reset();

    // initialize output String as empty
    let charString: string = '';
    
    // this variable we use in our lojic
    let tempFormValue = this.formValue;
    
    // variable for save reminders
    let temp;
    
    while (tempFormValue > 0)
    { 
      // to get reminder important for us
      temp = (tempFormValue - 1) % 26;
      
      // here we convert number to character if temp is 0 we get A, if 25 we get Z
      charString = String.fromCharCode(temp + 65) + charString;
      
      // this line important to get out from loop and to get other reminder values 
      tempFormValue = (tempFormValue - temp - 1) / 26;      
    }    
      // show in screen our last letters
      this.result = charString;
    }
  }


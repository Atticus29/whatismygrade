import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { ValidationService } from '../validation.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [ValidationService]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private vs: ValidationService) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      emailBound: ['', Validators.required],
      passwordBound: ['', Validators.required],
    });
  }

  getValues(){
    let result = this.signInForm.value;
    return result;
  }

  allValid(){
    let values = this.signInForm.value;
    if(this.vs.validateEmail(values.userEmailBound) && this.vs.validatePassword(values.passwordBound)){
      return true;
    } else{
      return false;
    }
  }

  processForm(){
    console.log("processForm entered");
  }

}

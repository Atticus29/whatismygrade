import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { ValidationService } from '../validation.service';
import { PasswordService } from '../password.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [ValidationService]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private vs: ValidationService, private ps: PasswordService, private router: Router) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      emailBound: ['', Validators.required],
      passwordBound: ['', Validators.required],
      userNameBound: ['', Validators.required]
    });
  }

  getValues(){
    let result = this.signInForm.value;
    return result;
  }

  allValid(){
    let values = this.signInForm.value;
    if(this.vs.validateEmail(values.emailBound) && this.vs.validatePassword(values.passwordBound) && this.vs.validateUserName(values.userNameBound)){
      return true;
    } else{
      return false;
    }
  }

  processFormInputs(){
    console.log("processForm entered");
    let values = this.signInForm.value;
    if(this.ps.storeInfo(values.emailBound, values.userNameBound, values.passwordBound)){
      console.log("got true");
      this.router.navigate(['test']);
    }

  }

}

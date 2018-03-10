import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PasswordService {
  private email: BehaviorSubject<string>;
  userName: BehaviorSubject<string>;
  password: BehaviorSubject<string>;

  constructor() { }

  storeInfo(email: string, userName: string, password: string){
    this.email = new BehaviorSubject<string>(email);
    this.userName = new BehaviorSubject<string>(userName);
    this.password = new BehaviorSubject<string>(password);
    if(this.email && this.userName && this.password){
      return true;
    } else{
      return false;
    }
  }

  getEmail(){
    var currentEmail = this.email.asObservable();
    return currentEmail;
  }
  // getInfo(){
  //   return Observable.of({email: this.email, userName: this.userName, password: this.password});
  // }

}

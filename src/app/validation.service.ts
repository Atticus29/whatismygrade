import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase()) && email;
  }

  validatePassword(password: string){
    return password.length > 6 && password;
  }

  validateUserName(userName: string){
    var re = new RegExp('^([a-zA-Z\-0-9]+)$');
    return re.test(userName) && userName && userName.length > 6;
  }
}

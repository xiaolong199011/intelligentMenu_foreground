import {CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class SigninGuard implements CanActivate {
  
    constructor(private router: Router) {
    }
  
    canActivate() {
      if (!sessionStorage.getItem('status')) {
        alert('Please Sign in')
        return false;
      } else{
        return true;
      }
    }
  }
  
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export default class ActivateGuard implements CanActivate {

  private can: boolean = false;
  constructor( private router: Router) { }
  canActivate() {
    console.log('ActivateGuard#canActivate called, can: ', this.can);
    if (!this.can) {
      alert('Activation blocked');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  setCanActivate(can:boolean) {
    this.can = can;
  }
}
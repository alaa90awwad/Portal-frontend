import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/Models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('boxEmail') input: ElementRef
EmailInput:string;
  constructor(private router: Router, public user:User, public service:LoginService) { }

  ngOnInit() {
    this.service.formData=new User();
  }


  gotoLogin() {
    this.router.navigate(['/password']);
  }

  ngOnDestroy() {
    this.user.email = this.EmailInput; 
 }

 onEnter(value: string) { this.EmailInput = value; }

}

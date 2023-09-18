import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { ROUTES } from '../side-bar/side-bar.component';
import { User } from 'src/app/Models/User.model';
import ActivateGuard from 'src/app/activate-guard';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  newUser:boolean= false;
  inviteCancel:boolean =false;
newUserPath='/new-user';
isAdd:boolean=false
name:string;



  constructor(public  user:User,location: Location,private router: Router,private activateGuard: ActivateGuard) { 
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.name= localStorage.getItem('name') ||'';
    console.log(this.name);
    console.log(this.listTitles);
  }


  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){

          if(this.listTitles[item].path =='/UserManagment')
          {
            this.newUser = true;
            this.inviteCancel = false;
          }
            return this.listTitles[item].titleBar;
        }
        else if (titlee =='/new-user')
        {
          this.newUser = false;
          this.inviteCancel = true;
          return 'New User';
        }
    }
    return 'Products';
  }

  dropdown(){
     this.isAdd = !this.isAdd}
     
     drop(){
       this.isAdd = !this.isAdd }

       Logout(){
        localStorage.removeItem('name');
        localStorage.removeItem('Role');
        this.activateGuard.setCanActivate(false);
        this.router.navigate(['/login']);
       }

}

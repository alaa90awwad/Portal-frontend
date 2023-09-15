import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from 'src/app/services/add-user.service';
import { User } from 'src/app/Models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private router: Router,public service:AddUserService) { }

  ngOnInit(){
  }



  AddNewUser() {
    this.service.AddUser().subscribe(
      (res) =>{
        console.log("Added successfully");
        this.service.newUser.email='';
        this.service.newUser.password='';
        this.service.newUser.firstname='';
        this.service.newUser.lastname='';
        alert("User added successfully");
        this.router.navigate(['/new-user']);

      },
      (err) =>{
        console.log(err);
        alert("Error Adding User");
      }
    );
  }


}

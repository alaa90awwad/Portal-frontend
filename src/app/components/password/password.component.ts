import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ActivateGuard from 'src/app/activate-guard';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/Models/User.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
 ;
  email:any;
  role:string='';
  constructor(private router: Router, public  user:User, public service:LoginService, private activateGuard: ActivateGuard) { }

  ngOnInit(): void {
    this.email= this.user.email;
  }


  goBack() {
    this.router.navigate(['/login']);
  }

  Login() {
    console.log(this.service.formData.password)
    if(this.service.postLogin())
    {
      this.activateGuard.setCanActivate(true);

      localStorage.setItem('name', this.service.formData.email || '');
      this.role = localStorage.getItem('Role')||'';
      if(this.role == 'admin')
      {
        this.router.navigate(['/manageproducts']);
      }
      else{
        this.router.navigate(['/products']);
      }
      
    }
    else{
      alert("Email or password is incorrect");
    }
      //  console.log("login successfully");
       // localStorage.setItem('name', JSON.stringify(res));     
  
  }
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  formData :User = new User();

  postLogin()
  {
    if(this.formData.email=='admin' && this.formData.password == 'admin')
    {
      localStorage.setItem('Role', 'admin')
      return true;
    }
    else if (this.formData.email=='user' && this.formData.password == 'user'){
      localStorage.setItem('Role', 'user')
      return true;

    }
    else
    {
      localStorage.setItem('Role', '')
      return false;
    }
  }
}

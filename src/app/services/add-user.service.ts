import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http:HttpClient) { }

  newUser:User= new User();

  readonly baseURL = 'https://localhost:44346/api/Login/';

  AddUser()
  {
    return this.http.post(this.baseURL +"AddUser",this.newUser);
  }

  getUsers() :Observable<User>
  {
    return this.http.get<User>(this.baseURL+ "getUsers");
  }
}

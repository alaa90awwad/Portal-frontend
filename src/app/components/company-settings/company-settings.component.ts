import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddUserService } from 'src/app/services/add-user.service';
import { User } from 'src/app/Models/User.model';


export interface data {
  firstname: string;
  lastname:string;
  Role: string;
  Email: string;
  PortalAccess: string;
  InvitationStatus:string;
  LastLogin:string;
}
const ELEMENT_DATA: User[] = [];


@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent implements OnInit {
  displayedColumns:string[];
  ds:User | undefined;
  dataSource = new MatTableDataSource<User>();
  constructor(private router: Router,public service:AddUserService) { }
data :any[]=[];
  ngOnInit(){
    this.displayedColumns  = ['firstname', 'lastname','Role', 'Email', 'Portal Access','Invitation Status','Last Login'];
    //this.dataSource = ELEMENT_DATA;

this.data = [{ firstname: 'admin', lastname: "admin" ,Role:'admin',Email:'admin'}, 
               {firstname: 'user', lastname: "user" ,Role:'user',Email:'user'}];

//this.ds= this.data;
      this.dataSource = new MatTableDataSource(this.data as User[]);


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}

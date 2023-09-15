import { Component, OnInit } from '@angular/core';




declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    titleBar:string;
    icon: string;
    class: string;
    hide: boolean;
}


export const ROUTES: any[] = [

    { path: '/products', title: 'PRODUCTS',titleBar:'Products List' , icon: 'dashboard', class: '', hide:false },
    {path:'/manageproducts', title:'MANAGE PRODUCTS',titleBar:'manage products' , icon: 'dashboard', class: '', hide:false},
    { path: '/UserManagment', title: 'USER MANAGMENT', titleBar:'user Managment' , icon:'location_on', class: '', hide:false },
    { path: '/request', title: 'REQUESTS',titleBar:'New Request' , icon: 'dashboard', class: '', hide:false },
    { path: '/Portal-faqs', title: 'PORTAL FAQS', titleBar:'New Request' , icon:'notifications', class: '' , hide:false},

];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
 // ROUTES: any[] = [
  //  { id:1,path: '/products', title: 'PRODUCTS',titleBar:'Products List' , icon: 'dashboard', class: '', hide:false },
  //  {id:2, path:'/manageproducts', title:'MANAGE PRODUCTS',titleBar:'manage products' , icon: 'dashboard', class: '',hide:false},
  //  { id:3,path: '/request', title: 'REQUESTS',titleBar:'New Request' , icon: 'dashboard', class: '' ,hide:false},
  //  { id:4,path: '/UserManagment', title: 'USER MANAGMENT', titleBar:'user Managment' , icon:'location_on', class: '',hide:false },
  //  {id:4, path: '/Portal-faqs', title: 'PORTAL FAQS', titleBar:'New Request' , icon:'notifications', class: '',hide:false },
//];
  role:string='';
  constructor() { }
  menuItems: any[];

  ngOnInit(){
    this.role = localStorage.getItem('Role')||'';
    if( this.role == 'admin')
    {
      ROUTES.find(route => route.path == '/products').hide = true;
    
     // this.ROUTES[0].hide=true
    }
    else if ( this.role == 'user')
    {
      ROUTES.find(route => route.path == '/manageproducts').hide = true;
      ROUTES.find(route => route.path == '/UserManagment').hide = true;
    //  this.ROUTES[1].hide=true
    //  this.ROUTES[3].hide=true
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}

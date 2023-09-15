import { Routes } from '@angular/router';
import ActivateGuard from 'src/app/activate-guard';
import { CompanySettingsComponent } from '../company-settings/company-settings.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { RequestComponent } from '../request/request.component';
import { ProductsComponent } from '../products/products.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { ManageproductComponent } from '../manageproduct/manageproduct.component';
import { CreateproductComponent } from '../createproduct/createproduct.component';


export const PortalRoutes: Routes = [

    { path:'request', component:RequestComponent,  canActivate: [ActivateGuard]},
    { path:'UserManagment', component:CompanySettingsComponent, canActivate: [ActivateGuard]},
    { path:'new-user', component:NewUserComponent, canActivate: [ActivateGuard]},
    { path:'products', component:ProductsComponent, canActivate: [ActivateGuard]},
     {path:'productdetails/:id',component:ProductdetailComponent, canActivate:[ActivateGuard] },
     {path:'manageproducts', component:ManageproductComponent, canActivate:[ActivateGuard]},
     {path:'create', component:CreateproductComponent, canActivate:[ActivateGuard]},
     {path:'edit/:id', component:CreateproductComponent, canActivate:[ActivateGuard]}


];
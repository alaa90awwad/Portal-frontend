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

    { path:'request', component:RequestComponent},
    { path:'UserManagment', component:CompanySettingsComponent},
    { path:'new-user', component:NewUserComponent},
    { path:'products', component:ProductsComponent},
     {path:'productdetails/:id',component:ProductdetailComponent },
     {path:'manageproducts', component:ManageproductComponent},
     {path:'create', component:CreateproductComponent},
     {path:'edit/:id', component:CreateproductComponent}


];
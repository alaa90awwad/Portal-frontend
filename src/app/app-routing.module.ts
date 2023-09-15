import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySettingsComponent } from './components/company-settings/company-settings.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordComponent } from './components/password/password.component';
import { PortalComponent } from './components/portal/portal.component';
import { RequestComponent } from './components/request/request.component';
import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'login', component: LoginComponent },
  { path:'portal', component:PortalComponent},
  {path:'accessdenied', component:AccessdeniedComponent},
  {
    path: '',
    component: PortalComponent,
    children: [{
      path: '',
      loadChildren: () => import('./components/portal/Portal.module').then(m => m.PortalModule)
    }]
  },
  { path:'', redirectTo:'/login', pathMatch:'full'},
 // { path:'portal', redirectTo:'/request', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

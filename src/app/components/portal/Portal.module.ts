import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalRoutes } from './portal.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RequestComponent } from '../request/request.component';
import { CompanySettingsComponent } from '../company-settings/company-settings.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'  
import { NewUserComponent } from '../new-user/new-user.component';
import { ProductsComponent } from '../products/products.component';
import { ManageproductComponent } from '../manageproduct/manageproduct.component';
import { CreateproductComponent } from '../createproduct/createproduct.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(PortalRoutes),
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      MatStepperModule,
      MatCardModule,
      MatIconModule,
      MatTabsModule,
      MatTableModule,
      NgxPaginationModule 
      
  
    ],
    declarations: [
      RequestComponent,
      CompanySettingsComponent,
      NewUserComponent,
      ProductsComponent,
      ManageproductComponent,
      CreateproductComponent
    ]
  })

  export class PortalModule {}
  
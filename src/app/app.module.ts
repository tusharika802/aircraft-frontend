import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevExtremeModule, DxBoxModule, DxButtonModule, DxDrawerModule, DxDropDownBoxModule, DxFormModule, DxListModule, DxPopupModule, DxTextBoxModule } from 'devextreme-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContractComponent } from './contract/contract.component';
import { PartsComponent } from './parts/parts.component';
import { ServicecentreComponent } from './servicecentre/servicecentre.component';
import { PartnerComponent } from './partner/partner.component';
import { StaffComponent } from './staff/staff.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContractComponent,
    PartsComponent,
    ServicecentreComponent,
    PartnerComponent,
    StaffComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    DxDrawerModule,
    DxListModule,
DxDataGridModule,
DxBoxModule,
HttpClientModule,
FormsModule,
DxPopupModule,
ReactiveFormsModule,
DxButtonModule,
DxTextBoxModule,
DxFormModule,
        DxDropDownBoxModule

  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

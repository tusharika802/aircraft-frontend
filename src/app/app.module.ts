import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevExtremeModule, DxBoxModule, DxDrawerModule, DxListModule } from 'devextreme-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    DxDrawerModule,
    DxListModule,
DxDataGridModule,
DxBoxModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

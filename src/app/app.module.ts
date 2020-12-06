import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { DriverModule } from './driver/driver.module';
import { AuthenticationComponent } from './authentication/authentication.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VehicleModule,
    DriverModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VehicleComponent } from './vehicle.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [ 
    VehicleComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VehicleComponent,
    DialogComponent
  ]
})
export class VehicleModule { }

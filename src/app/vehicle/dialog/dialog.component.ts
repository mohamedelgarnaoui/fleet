import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit {

  @ViewChild('registrationNumber') registrationNumberInput!: ElementRef;
  @ViewChild('brand') brandInput!: ElementRef;
  @ViewChild('currentKm') currentKmInput!: ElementRef;
  @Output() vehicleAdded = new EventEmitter<Vehicle>();

  vehicle!: Vehicle;

  editMode: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    private vehicleService: VehicleService,
    @Inject(MAT_DIALOG_DATA) public data: Vehicle) {
    this.vehicle = data;
  }
  ngAfterViewInit(): void {
    this.editMode = this.vehicle !== undefined;
    if (!this.editMode) {
      this.registrationNumberInput.nativeElement.value = this.vehicle.registrationNumber;
      this.brandInput.nativeElement.value = this.vehicle.brand;
      this.currentKmInput.nativeElement.value = this.vehicle.currentKm;
    } else {
      this.editMode = false;
    }
  }

  ngOnInit(): void {
    
  }

  onSave(form: NgForm): void {
    this.vehicle.registrationNumber = form.value.registrationNumber;
    this.vehicle.brand = form.value.brand;
    this.vehicle.currentKm = form.value.currentKm;

    if (this.editMode){
      this.vehicleService.editVehicle(this.vehicle).subscribe(value => {
        this.vehicleService.vehicleChanged.next();
        this.dialogRef.close();
      });
    }else {
      this.vehicleService.addVehicle(this.vehicle).subscribe(value => {
        this.vehicleService.vehicleChanged.next();
        this.dialogRef.close();
      });
    }
  }

}

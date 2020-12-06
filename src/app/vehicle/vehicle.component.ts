import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../model/vehicle';
import {MatTableDataSource} from '@angular/material/table';
import { VehicleService } from '../services/vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'registrationNumber', 'brand', 'currentKm'];
  
  dataSource!: MatTableDataSource<Vehicle>;

  constructor(private vehicleService: VehicleService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.vehicleService.vehicleChanged.subscribe(() => {
      this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }
  
  /*onVehicleAdded(vehicle: Vehicle): void {
    this.dataSource = new MatTableDataSource(this.vehicleService.getVehicles());
    this.vehicleService.vehicleChanged.subscribe(() => {
      this.dataSource = new MatTableDataSource(this.vehicleService.getVehicles());
    });
  }*/

  openNewDialog(){
    this.dialog.open(DialogComponent, {
      width:'400px',
      height:"600px",
      data: new Vehicle()
    });
  }
  
  showVehicleDetails(id:number){
    this.vehicleService.getVehicleById(id).subscribe(value => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        data: value
      });
    });
  }
}
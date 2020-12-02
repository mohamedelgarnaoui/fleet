import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  vehicles!: Vehicle[];

  @Input() currentDriver:Driver = new Driver();

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getVehicles();
  }

  onFileUpload($event: Event): void{

  }

}

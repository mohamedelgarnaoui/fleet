import { EventEmitter, Injectable } from '@angular/core';
import { Driver } from '../model/driver';
import { VehicleService } from './vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  driverSelected = new EventEmitter<Driver>();

  drivers : Driver []= [];
  vehicles: any;
  
  constructor(private vehicleService: VehicleService) {
    
    this.vehicles = this.vehicleService.getVehicles();

    this.drivers =  [
      new Driver(1, 'Med', 'Elgarnaoui', '111222111/A1',
        this.vehicles[1], 'assets/img/driver.png'),
      new Driver(1, 'Ahmed', 'Ahm', '19992111/B1',
        this.vehicles[0], 'assets/img/driver1.png'),
      new Driver(1, 'Mohamed', 'Medo', '3333111/C2',
        this.vehicles[1], 'assets/img/driver5.png'),
      new Driver(1, 'Abdellah', 'Abdellah', '22211991/b1',
        this.vehicles[0], 'assets/img/driver6.jpg')
    ];

  }

  getDrivers(): Driver[]{
    return this.drivers;
  }

}

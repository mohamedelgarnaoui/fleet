import { Injectable } from '@angular/core';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles: Vehicle[] = [
    new Vehicle(1, '147852-I-78', 'Mercedes', 14520),
    new Vehicle(2,  '258963-E-48', 'Mazirati', 100000),
    new Vehicle(3,  '247856-A-19', 'Dacia', 147000)
  ];
  
  constructor() { }

  getVehicles(): Vehicle[]{
    return this.vehicles;
  }
}

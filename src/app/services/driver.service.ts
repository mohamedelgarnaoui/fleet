import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../model/driver';
import { VehicleService } from './vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  driverSelected = new EventEmitter<Driver>();

  drivers : Driver []= [];
  vehicles: any;

  url = 'http://localhost:3000/drivers';
  
  constructor(private vehicleService: VehicleService, private  http: HttpClient) {
    
    this.vehicles = this.vehicleService.getVehicles();

    this.drivers =  [
      new Driver(0, 'Med', 'Elgarnaoui', '111222111/A1',
        this.vehicles[1], '/images/driver0.png'),
      new Driver(1, 'Ahmed', 'Ahm', '19992111/B1',
        this.vehicles[0], '/images/driver1.png'),
      new Driver(2, 'Mohamed', 'Medo', '3333111/C2',
        this.vehicles[1], '/images/driver2.png'),
      new Driver(3, 'Abdellah', 'Abdellah', '22211991/b1',
        this.vehicles[0], '/images/driver3.png')
    ];

  }

  getDrivers(): Observable<Driver[]>{
    return this.http.get<Driver[]> (this.url);
  }

  getDriver(id:number):Observable<Driver>{
    return this.http.get<Driver>(`${this.url}/${id}`);
  }

  addDriver(driver:Driver): Observable<Driver>{
    if (driver.id === undefined){
      return this.http.post<Driver>(this.url,driver);
    } else {
      return this.http.put<Driver>(this.url,driver);
    }
  }

}

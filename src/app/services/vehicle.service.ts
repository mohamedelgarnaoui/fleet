import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicleChanged : Subject<void> = new Subject();
  
  url = 'http://localhost:3000/vehicles';

  vehicles: Vehicle[] = [];
  

  constructor(private  http: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  addVehicle(vehicle: Vehicle): Observable<any>{
    return this.http.post(this.url, vehicle);
  }

  getVehicleById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  editVehicle(vehicle: Vehicle): Observable<any>{
    return this.http.put(`${this.url}/${vehicle.id}`, vehicle);
  }

  
}

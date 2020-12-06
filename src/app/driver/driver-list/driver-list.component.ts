import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  
  drivers: Driver[] =  [];

  constructor(private sanitizer: DomSanitizer, 
    private driverService: DriverService,
    private vehicleService:VehicleService,
    private router:Router,
    private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void { 
    this.driverService.getDrivers().subscribe((data: Driver[]) => {
      this.drivers = data;
      this.drivers.forEach((driver) => {
        this.vehicleService.getVehicleById(driver.vehicle!.id).subscribe(value => {
          driver.vehicle = value;
        });
      });
    });
  }

  getImgContent(img: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  addNewDriver(){
    this.router.navigate(['new'], {relativeTo:this.activateRoute});
  }
}

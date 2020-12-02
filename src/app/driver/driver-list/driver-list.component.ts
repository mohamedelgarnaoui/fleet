import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  
  drivers: Driver[] =  [];

  constructor(private sanitizer: DomSanitizer, private driverService: DriverService) { }

  ngOnInit(): void { 
    this.drivers = this.driverService.getDrivers();
  }

  getImgContent(img: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}

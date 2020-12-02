import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  @Input() driver!: Driver;

  
  constructor(private sanitizer: DomSanitizer,
    private driverService: DriverService) { }

  ngOnInit(): void {
  }

  onDriverClick(){
    this.driverService.driverSelected.emit(this.driver);
  }

  getImgContent(img: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}

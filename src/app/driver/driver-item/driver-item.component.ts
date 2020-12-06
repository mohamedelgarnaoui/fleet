import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  @Input() driver!: Driver;

  imgSrc!: string;

  
  constructor(private sanitizer: DomSanitizer,
    private driverService: DriverService,
    private router:Router,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
    const ref = this.storage.ref(this.driver.photo!);
    ref.getDownloadURL().subscribe((url) => {
      this.imgSrc = url;
    });
  }

  onDriverClick(){
    this.driverService.driverSelected.emit(this.driver);
    this.router.navigate(['/drivers',this.driver.id]);
  }

  getImgContent(img: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}

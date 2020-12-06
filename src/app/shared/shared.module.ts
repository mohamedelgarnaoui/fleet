import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { ShadowDirective } from '../directive/shadow.directive';
import { FirstUpperCasePipe } from '../pipes/first-upper-case.pipe';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    ShadowDirective,
    FirstUpperCasePipe
  ],

  imports: [
    
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    HttpClientModule
  ],
  exports: [
    AngularFireModule,
    AngularFireStorageModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ShadowDirective,
    FirstUpperCasePipe,
    RouterModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule,
    AngularFireStorageModule,
    HttpClientModule
  ]
})
export class SharedModule { }

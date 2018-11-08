import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosDetailsComponent } from './eventos/components/evento-details/eventos-details.component';
import { EventosListComponent } from './eventos/components/eventos-list/eventos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEventoComponent } from './eventos/components/add-evento/add-evento.component';

@NgModule({
  declarations: [
    EventosDetailsComponent,
    EventosListComponent,
    AddEventoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class EventosModule { }

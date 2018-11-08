import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosDetailsComponent } from './eventos/components/eventos-details/eventos-details.component';
import { EventosListComponent } from './eventos/components/eventos-list/eventos-list.component';

@NgModule({
  declarations: [EventosDetailsComponent, EventosListComponent],
  imports: [
    CommonModule
  ]
})
export class EventosModule { }

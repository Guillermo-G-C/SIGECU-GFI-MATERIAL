import { Component, OnInit } from '@angular/core';
import { Eventos } from '../../models/eventos';
import { map } from 'rxjs/operators';
import { Route } from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.scss']
})
export class EventosListComponent implements OnInit {

  eventos: Eventos[];

  constructor(/*private route: Route,*/ private eventosServices: EventosService) { }

  ngOnInit() {
    this.eventosServices.getEventosList()
      .subscribe( data => {
        this.eventos = data;
      });
  }

  reloadData(){
    //this.eventos = this.eventosServices.getEventosList();
  }

}

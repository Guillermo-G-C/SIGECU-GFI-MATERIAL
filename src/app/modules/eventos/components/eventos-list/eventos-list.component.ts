import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.scss']
})
export class EventosListComponent implements OnInit {

  eventos: Evento[];

  constructor(/*private route: Route,*/ private eventosServices: EventosService) { }

  ngOnInit() {
    this.eventosServices.getEventosList()
      .subscribe( data => {
        this.eventos = data;
      });
    this.reloadData();
  }

  reloadData(){
    //this.eventos = this.eventosServices.getEventosList();
  }

}

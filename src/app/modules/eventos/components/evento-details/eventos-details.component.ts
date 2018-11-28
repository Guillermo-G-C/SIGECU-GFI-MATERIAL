import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';
import { EventosListComponent } from '../eventos-list/eventos-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-details',
  templateUrl: './eventos-details.component.html',
  styleUrls: ['./eventos-details.component.scss']
})
export class EventosDetailsComponent implements OnInit {

  @Input() evento: Evento;

  constructor(private router: Router,
              private eventoService: EventosService,
              private eventosListComponent: EventosListComponent) { }

  ngOnInit() {
  }

  deleteEvento(evento: Evento){
    this.eventoService.deleteEvento(this.evento.idEventos)
      .subscribe( data =>{
        alert("Evento eliminado correctamente!");
        this.eventosListComponent.eventos = this.eventosListComponent.eventos.filter( u => u !== evento);
      },
      error => console.log("Error"+error));
  }

  editarEvento(evento: Evento) { 
    window.localStorage.removeItem("editEventoId");
    window.localStorage.setItem("editEventoId", this.evento.idEventos.toString());
    this.router.navigate(['editEvento']);
  }
  
  doSomething() {
    return false;
  }

}

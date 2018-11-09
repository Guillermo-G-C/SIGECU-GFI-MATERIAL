import { Component, OnInit, Input } from '@angular/core';
import { Eventos } from '../../models/eventos';
import { EventosService } from '../../services/eventos.service';
import { EventosListComponent } from '../eventos-list/eventos-list.component';

@Component({
  selector: 'app-eventos-details',
  templateUrl: './eventos-details.component.html',
  styleUrls: ['./eventos-details.component.scss']
})
export class EventosDetailsComponent implements OnInit {

  id: number = 5;
  //evento: Eventos;
  @Input() evento: Eventos;

  constructor(private eventoService: EventosService, private eventosListComponent: EventosListComponent) { }

  ngOnInit() {
    //this.id = 4;

    //this.reloadData();
  }

  reloadData() {
    this.eventoService.getEventoById(this.id)
    .subscribe(data => this.evento = data);
  }


  deleteEvento(){
    this.eventoService.deleteEvento(this.evento.idEventos)
      .subscribe( data =>{
        console.log(data);
        this.eventosListComponent.reloadData();
      },
    error => console.log(error));
  }

}

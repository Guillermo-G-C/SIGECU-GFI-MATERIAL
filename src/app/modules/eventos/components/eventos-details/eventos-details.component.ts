import { Component, OnInit, Input } from '@angular/core';
import { Eventos } from '../../models/eventos';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos-details',
  templateUrl: './eventos-details.component.html',
  styleUrls: ['./eventos-details.component.scss']
})
export class EventosDetailsComponent implements OnInit {

  id: number = 4;
  evento: Eventos;
  //@Input() evento: Eventos;

  constructor(private eventoService: EventosService) { }

  ngOnInit() {
    //this.id = 4;

    //this.reloadData();
  }

  /*reloadData() {
    this.eventoService.getEvento(this.id)
    .subscribe(data => this.evento = data);
  }*/

}

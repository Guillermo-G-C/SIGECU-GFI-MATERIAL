import { Component, OnInit } from '@angular/core';
import { Eventos } from '../../models/eventos';
import { EventosService } from '../../services/eventos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.scss']
})
export class AddEventoComponent implements OnInit {

  addForm: FormGroup;
  evento: Eventos = new Eventos();

  constructor(private formBuilder: FormBuilder, private router: Router , private eventosService: EventosService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      idEventos: ['', Validators.required],
      c_idcursos: ['', Validators.required],
      i_idinstructor: ['', Validators.required],
      eDescripcion: ['', Validators.required],
      eFechaInicio: ['', Validators.required],
      eFechaTermino: ['', Validators.required],
      ePrograma: ['', Validators.required],
      eHorario: ['', Validators.required],
      eCapacidad: ['', Validators.required],
      eEstatus: ['', Validators.required],
      l_idlugar: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.addForm.value);
  
    // stop here if form is invalid
    if (this.addForm.invalid) {
        return;
    }else{
      this.eventosService.createEvento(this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['eventoList'])
        });
    }
  }

}

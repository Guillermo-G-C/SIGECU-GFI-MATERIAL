import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.scss']
})
export class AddEventoComponent implements OnInit {
  isValidFormSubmitted = null;
  addForm: FormGroup;
  evento: Evento = new Evento();
  private formSubmitAttempt: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router , private eventosService: EventosService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      idEvento: [''],
      c_idcurso: ['', Validators.required],
      i_idinstructor: ['', Validators.required],
      eDescripcion: ['', Validators.required],
      eFechaInicio: ['', Validators.required],
      eFechaTermino: ['', Validators.required],
      ePrograma: ['', Validators.required],
      eHorario: ['', Validators.required],
      eCapacidad: ['', Validators.required],
      eEstatus: ['', Validators.requiredTrue],
      l_idlugar: ['', Validators.required]
    })
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.addForm.get(field).valid && this.addForm.get(field).touched) ||
      (this.addForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(){
    this.isValidFormSubmitted = false;
    console.log(this.addForm.value);
  
    // stop here if form is invalid
    if (this.addForm.invalid) {
        console.log('Formilario Ivalido');
        return;
    }else{
      this.isValidFormSubmitted = true;
      this.eventosService.createEvento(this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['eventoList'])
        });
      this.addForm.reset();
    }
  }

  revert() {
    // Resets to blank object
    //this.addForm.reset();

    // Resets to provided model
    this.addForm.reset({ personalData: new Evento(), requestType: '', text: '' });
  }

}

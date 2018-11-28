import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from '../../models/curso';
import { CursosService } from '../../services/cursos.service';
import { Instructor } from '../../models/instructor';
import { Lugar } from '../../models/lugar';
import { InstructorService } from '../../services/instructor.service';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.scss']
})
export class AddEventoComponent implements OnInit {
  isValidFormSubmitted = null;
  addForm: FormGroup;
  evento: Evento = new Evento();
  cursos: Curso[];
  instructores: Instructor[];
  lugares: Lugar[];
  private formSubmitAttempt: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router, 
              private eventosService: EventosService,
              private cursosService: CursosService,
              private instructoresService: InstructorService,
              private lugaresService: LugaresService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      idEvento: [''],
      curso: ['', Validators.required],
      instructor: ['', Validators.required],
      eDescripcion: ['', Validators.required],
      eFechaInicio: ['', Validators.required],
      eFechaTermino: ['', Validators.required],
      ePrograma: ['', Validators.required],
      eHoraEntrada: ['', Validators.required],
      eHoraSalida: ['', Validators.required],
      eCapacidad: ['', Validators.required],
      eEstatus: ['',Validators.required],
      lugar: ['', Validators.required]
    })

    this.cursosService.getCursosList()
      .subscribe(data => {
        this.cursos = data;
      })
    this.instructoresService.getInstructoresList()
      .subscribe(data => {
        this.instructores = data;
      })
    this.lugaresService.getLugaresList()
      .subscribe(data => {
        this.lugares = data;
      })
    }

  isFieldInvalid(field: string) {
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
      //this.addForm.reset();
    }
  }

  revert() {
    // Resets to blank object
    this.addForm.reset();

    // Resets to provided model
    //this.addForm.reset({ evento: new Evento(), requestType: '', text: '' });
  }

}

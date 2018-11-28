import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { Curso } from '../../models/curso';
import { Instructor } from '../../models/instructor';
import { Lugar } from '../../models/lugar';
import { CursosService } from '../../services/cursos.service';
import { InstructorService } from '../../services/instructor.service';
import { LugaresService } from '../../services/lugares.service';
import { first } from '../../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-edit-evento',
  templateUrl: './edit-evento.component.html',
  styleUrls: ['./edit-evento.component.scss']
})
export class EditEventoComponent implements OnInit {

  editForm: FormGroup;
  eFechaInicio:Date=null;
  private formSubmitAttempt: boolean;

  cursos: Curso[] = [];
  instructores: Instructor[];
  lugares: Lugar[];

  cursoSeleccionado: Curso;
  instructorSeleccionado: Instructor;
  lugarSeleccionado: Lugar;

  constructor(private formBuilder: FormBuilder,
              private router: Router, 
              private eventosService: EventosService,
              private cursosService: CursosService,
              private instructoresService: InstructorService,
              private lugaresService: LugaresService) { }

  ngOnInit() {

    let eventoId = window.localStorage.getItem("editEventoId");
    if(!eventoId){
      alert("Invalid action.");
      this.router.navigate(['eventoList']);
      return;
    }

    this.editForm = this.formBuilder.group({
      idEventos: [''],
      curso: ['', Validators.required],
      instructor: ['', Validators.required],
      eDescripcion: ['', Validators.required],
      eFechaInicio: ['', Validators.required],
      eFechaTermino: ['', Validators.required],
      ePrograma: ['', Validators.required],
      eHoraEntrada: ['', Validators.required],
      eHoraSalida: ['', Validators.required],
      eCapacidad: ['', Validators.required],
      eEstatus: ['', Validators.required],
      lugar: ['', Validators.required]
    })

    this.cursosService.getCursosList()
      .subscribe(data => {
        this.cursos = data;

        //const cJson = JSON.stringify(data[1]);
        //this.cursoSeleccionado=JSON.parse(cJson);
        console.log("cursosService: "+this.cursos);
      });

    this.instructoresService.getInstructoresList()
      .subscribe(data => {
        this.instructores = data;
      });

    this.lugaresService.getLugaresList()
      .subscribe(data => {
        this.lugares = data;
      });

    this.eventosService.getEventoById(+eventoId)
      .subscribe( data => {
        this.editForm.setValue(data);

        this.cursoSeleccionado = this.cursos.find( curso => curso.idCursos ===  Number(data.curso) );
        this.instructorSeleccionado = this.instructores.find( i => i.idInstructor === Number(data.instructor) );
        this.lugarSeleccionado = this.lugares.find( l => l.idLugar === Number(data.lugar) );

        this.editForm.patchValue({
          curso: this.cursoSeleccionado.idCursos,
          instructor: this.instructorSeleccionado.idInstructor,
          lugar: this.lugarSeleccionado.idLugar
        });
        
      });

  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.editForm.get(field).valid && this.editForm.get(field).touched) ||
      (this.editForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.editForm.invalid) {
      console.log('Formilario Ivalido');
      return;
    }

    this.eventosService.updateEvento(this.editForm.value)
      .pipe(first())
      .subscribe(
        data =>{
          this.router.navigate(['eventoList']);
          /*if(data.status === 200) {
            this.router.navigate(['eventoList']);
          }else{
            alert(data.message);
          }*/
        },error => {
          alert(error.message);
        }
      )
  }

  cursoS(c: Curso){
    console.log(c);
  }

}

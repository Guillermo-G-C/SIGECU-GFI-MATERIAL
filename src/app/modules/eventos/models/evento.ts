import { Curso } from "./curso";
import { Instructor } from "./instructor";

export class Evento {
    idEventos: number;
    curso: Curso;
    instructor: Instructor;
    eDescripcion: string;
    eFechaInicio: Date;
    eFechaTermino: Date;
    ePrograma: string;
    eHorario: string;
    eCapacidad: string;
    eEstatus: string;
    l_idlugar: number;
}

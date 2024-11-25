import { Practica } from "./practica";

export class EvaluacionAcademico{
    id_evaluacion:number;
    nombre:string;
    fecha_evaluacion:string;
    calificacion:number;
    observaciones:string;
    practica:Practica;

constructor(
    id_evaluacion: number = 0,
    nombre: string = '',
    fecha_evaluacion: string = '',
    calificacion: number = 0,
    observaciones: string = '',
    practica: Practica = new Practica()
  ) {
    this.id_evaluacion = id_evaluacion;
    this.nombre = nombre;
    this.fecha_evaluacion = fecha_evaluacion;
    this.calificacion = calificacion;
    this.observaciones = observaciones;
    this.practica = practica;
  }
}
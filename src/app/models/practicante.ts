import { Estado } from "./estados";
import { Persona } from "./persona";
import { PlanCarrera } from "./plancarrera";

export class Practicante{
   id_practicante:number;
horas_acumuladas:number;
horas_ps:number;
persona: Persona;
  plancarrera:PlanCarrera;
estado:Estado;
constructor(
  id_practicante: number = 0,
  horas_acumuladas: number = 0,
  horas_ps: number = 0,
  persona: Persona = new Persona(),
  plancarrera: PlanCarrera = new PlanCarrera(),
  estado: Estado = new Estado()
) {
  this.id_practicante = id_practicante;
  this.horas_acumuladas = horas_acumuladas;
  this.horas_ps = horas_ps;
  this.persona = persona;
  this.plancarrera = plancarrera;
  this.estado = estado;
}
}
import { Carrera } from "./carrera";
import { Plan } from "./plan";

export class PlanCarrera{
    id_plancarrera:number;
    horas:number;
    plan:Plan;
    carrera:Carrera; 
    
  constructor(
    id_plancarrera: number = 0,
    horas: number = 0,
    plan: Plan = new Plan(),
    carrera: Carrera = new Carrera()
  ) {
    this.id_plancarrera = id_plancarrera;
    this.horas = horas;
    this.plan = plan;
    this.carrera = carrera;
  }
}   

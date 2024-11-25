import { Empresa } from "./empresa";
import { Estado } from "./estados";
import { Linea } from "./linea";
import { PlanCarrera } from "./plancarrera";
import { Practicante } from "./practicante";
import { Supervisor } from "./supervisor";

export class Practica{
id_practica:number;
linea:Linea;
supervisor:Supervisor;
estado:Estado;
plancarrera:PlanCarrera;
fecha_inicio:Date;
fecha_fin:Date;
horas_plan:number;
nota_academica:number;
nota_empresarial:number;
ponderado_final:number;
empresa:Empresa;
practicante:Practicante;
constructor(
    id_practica: number = 0,
    linea: Linea = new Linea(),
    supervisor: Supervisor = new Supervisor(),
    estado: Estado = new Estado(),
    plancarrera: PlanCarrera = new PlanCarrera(),
    fecha_inicio: Date = new Date(),
    fecha_fin: Date = new Date(),
    horas_plan: number = 0,
    nota_academica: number = 0,
    nota_empresarial: number = 0,
    ponderado_final: number = 0,
    empresa: Empresa = new Empresa(),
    practicante: Practicante = new Practicante()
  ) {
    this.id_practica = id_practica;
    this.linea = linea;
    this.supervisor = supervisor;
    this.estado = estado;
    this.plancarrera = plancarrera;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.horas_plan = horas_plan;
    this.nota_academica = nota_academica;
    this.nota_empresarial = nota_empresarial;
    this.ponderado_final = ponderado_final;
    this.empresa = empresa;
    this.practicante = practicante;
  }
}
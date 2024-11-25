import { PlanCarrera } from "./plancarrera";

export class DocumentosPlan{
    id_tipodocumentos:number;
    
    plancarrera:PlanCarrera;
    constructor(
        id_tipodocumentos: number = 0,
        plancarrera: PlanCarrera = new PlanCarrera()
  ) {
    this.id_tipodocumentos = id_tipodocumentos;
    this. plancarrera= plancarrera;
  }
}
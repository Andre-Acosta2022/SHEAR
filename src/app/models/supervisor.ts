import { Estado } from "./estados";
import { Persona } from "./persona";

export class Supervisor{
    id_supervisor:number;
    tipos:string;
    persona:Persona;
    estado:Estado;

   
  constructor(
    id_supervisor: number = 0,
    tipos: string = '',
    persona: Persona = new Persona(),
    estado: Estado = new Estado()
  ) {
    this.id_supervisor = id_supervisor;
    this.tipos = tipos;
    this.persona = persona;
    this.estado = estado;
  } 
}
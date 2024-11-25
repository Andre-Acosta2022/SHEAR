import { Estado } from "./estados";

export class Persona{
    id_persona:number;
    nombre:string;
    apellido:string;
    email:string;
 telefono:number;
 codigo:number;
 dni:number;
 estado:Estado;
 
 constructor(
    id_persona: number = 0,
    nombre: string = '',
    apellido: string = '',
    email: string = '',
    telefono: number = 0,
    codigo: number = 0,
    dni: number = 0,
    estado: Estado = new Estado()
  ) {
    this.id_persona = id_persona;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
    this.codigo = codigo;
    this.dni = dni;
    this.estado = estado;
  }

}
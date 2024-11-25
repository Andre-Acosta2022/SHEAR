import { Estado } from "./estados";

export class Linea{
    id_linea:number;
 nombre:string;
 estado:string;

 constructor(
    id_linea: number = 0,
    nombre: string = '',
    estado: string = ''
) {
    this.id_linea = id_linea;
    this.nombre = nombre;
    this.estado =estado;
 }
}
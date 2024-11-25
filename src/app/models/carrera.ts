import {Estado } from "./estados";

export class  Carrera{
 idcarrera:number;
 nombre:string;
 estado:Estado   

  constructor(idcarrera:number= 0,nombre:string='',estado:Estado= new Estado()){
    this.idcarrera=idcarrera;
    this.nombre=nombre;
    this.estado=estado;
 }
}
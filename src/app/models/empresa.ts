import { Estado } from "./estados";
import { Linea } from "./linea";
import { RepresentanteLegal } from "./representante-legal";
import { Ubigeo } from "./ubigeo";

export class Empresa{
    id_empresa:number;
    nombre:string;
    ruc:number;
    email:string;
    telefono:number;
    direccion:string;
    linea:Linea;
    representante:RepresentanteLegal;
    estado:Estado;
    ubigeo:Ubigeo;
    
    constructor(
        id_empresa: number = 0,
        nombre: string = '',
        ruc: number = 0,
        email: string = '',
        telefono: number = 0,
        direccion: string ='',
        linea:Linea= new  Linea(),
        representante: RepresentanteLegal = new RepresentanteLegal(),
        estado: Estado = new Estado(),
        ubigeo: Ubigeo = new Ubigeo()
      ) {
        this.id_empresa = id_empresa;
        this.nombre = nombre;
        this.ruc = ruc;
        this.email = email;
        this.telefono = telefono;
        this.direccion=direccion;
        this.linea=linea;
        this.representante = representante;
        this.estado = estado;
        this.ubigeo = ubigeo;
      }
}

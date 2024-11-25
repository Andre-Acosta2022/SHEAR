import { TiposDocumentos } from "./tipodocumento";
import { Estado } from "./estados";
import { Practica } from "./practica";

export class Documentos{
    id_documentos:number;
    nombre:string;
    url:string;
    fecha_creacion:Date;
    fecha_subida:Date;
    estado:Estado;
    practica:Practica;
    tiposdocumento:TiposDocumentos;
    constructor(
        id_documentos: number = 0,
        nombre: string = '',
        url: string = '',
        fecha_creacion: Date = new Date(),
        fecha_subida: Date = new Date(),
        estado: Estado = new Estado(),
        practica: Practica = new Practica(),
        tiposdocumento: TiposDocumentos = new TiposDocumentos()
      ) {
        this.id_documentos = id_documentos;
        this.nombre = nombre;
        this.url = url;
        this.fecha_creacion = fecha_creacion;
        this.fecha_subida = fecha_subida;
        this.estado = estado;
        this.practica = practica;
        this.tiposdocumento = tiposdocumento;
      }
}
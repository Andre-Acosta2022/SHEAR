import { Rol } from "./rol";

export class TiposDocumentos{
    id_tipodocumento:number;
    rol_emisor:Rol;
    rol_receptor:Rol;
    nombre:string;
    plantilla_url:string;

 constructor(
    id_tipodocumento: number = 0,
    rol_emisor: Rol = new Rol(),
    rol_receptor: Rol = new Rol(),
    nombre: string = '',
    plantilla_url: string = ''
  ) {
    this.id_tipodocumento = id_tipodocumento;
    this.rol_emisor = rol_emisor;
    this.rol_receptor = rol_receptor;
    this.nombre = nombre;
    this.plantilla_url = plantilla_url;
  }
}
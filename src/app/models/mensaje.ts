import { TiposDocumentos } from "./tipodocumento";

export class Mensaje{
    id_mensaje:number;
    tipodocumento:TiposDocumentos;
    mensaje_receptor:Mensaje;
    mensaje_emisor:Mensaje;
    constructor(
        id_mensaje: number = 0,
        tipodocumento: TiposDocumentos = new TiposDocumentos(),
        mensaje_receptor: Mensaje = new Mensaje(),
        mensaje_emisor: Mensaje = new Mensaje(),
      ) {
        this.id_mensaje = id_mensaje;
        this.tipodocumento = tipodocumento;
        this.mensaje_receptor = mensaje_receptor;
        this.mensaje_emisor = mensaje_emisor;
      }
    }

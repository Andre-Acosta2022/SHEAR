import { Estado } from "./estados";
import { Mensaje } from "./mensaje";
import { Practica } from "./practica";
import { Usuario } from "./usuario";

export interface Notificacion{
    id_notificion:number;
    titulo:string;
    estado:Estado;
    mensaje:Mensaje;
    usuario_receptor:Usuario;
    usuario_emisor:Usuario;
}
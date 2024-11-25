import { Rol } from "./rol";
import { Usuario } from "./usuario";

export class UsuarioRol{
    id_usuariorol: number;
    usuario: Usuario;
    rol: Rol;
  
    constructor(
      id_usuariorol: number = 0,  // Corregí el nombre del parámetro
      usuario: Usuario = new Usuario(),
      rol: Rol = new Rol()
    ) {
      this.id_usuariorol = id_usuariorol;
      this.usuario = usuario;
      this.rol = rol;
    }
  }
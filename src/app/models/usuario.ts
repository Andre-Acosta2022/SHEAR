import { Estado } from "./estados";
import { Persona } from "./persona";
import { Rol } from "./rol";

export class Usuario{
  id_usuario: number;
  username: string;
  password: string;
  email: string;
  persona: Persona;
  rol: Rol;
  estado: Estado;

  constructor(
    id_usuario: number = 0,
    username: string = '',
    password: string = '',
    email: string = '',
    persona: Persona = new Persona(),
    rol: Rol = new Rol(),
    estado: Estado = new Estado()
  ) {
    this.id_usuario = id_usuario;
    this.username = username;
    this.password = password;
    this.email = email;
    this.persona = persona;
    this.rol = rol;
    this.estado = estado;
  }
}
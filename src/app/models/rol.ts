import { Estado } from "./estados";

export class Rol {
    id_rol:number;
    nombre:string;
    estado:Estado ;
    constructor(
        id_rol: number = 0,
        nombre: string = '',
        estado: Estado = new Estado(),
    ) {
        this.id_rol = id_rol;
        this.nombre =nombre;
        this.estado =estado;
}
}
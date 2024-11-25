export class Acceso {
    idacceso:number;
   nombre:string;

   constructor(
    id_acceso: number = 0,
    nombre: string = '',
) {
    this.idacceso = id_acceso;
    this.nombre = nombre;
}
}

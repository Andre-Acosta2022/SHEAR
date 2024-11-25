export class Estado{
    id_estados:number;
  nombre:string;
  constructor(
    id_estados: number = 0,
    nombre: string = '',
) {
    this.id_estados = id_estados;
    this.nombre = nombre;
}
}
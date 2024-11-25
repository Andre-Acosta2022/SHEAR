

export class RepresentanteLegal {
    id_representante:number;
   nombre: string;
  cargo:string;
  email:string;
  telefono:number;



constructor(
  id_representante: number = 0,
  nombre: string='',
  cargo: string = '',
  email:string='',
  telefono:number=0,

) {
  this.id_representante = id_representante;
  this.nombre =nombre;
  this.cargo = cargo;
  this.email= email;
  this.telefono=telefono;

}
}
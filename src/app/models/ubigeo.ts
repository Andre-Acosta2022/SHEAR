export class Ubigeo{
    id_ubigeo:number;
    departamento:string;
    provincia:string;
    distrito:string;
    
    constructor(
        id_ubigeo: number = 0,
        departamento: string = '',
        provincia: string = '',
        distrito: string = ''
      ) {
        this.id_ubigeo = id_ubigeo;
        this.departamento = departamento;
        this.provincia = provincia;
        this.distrito = distrito;
      }
}
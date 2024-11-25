import { Estado } from "./estados";

export class  Plan{
   id_plan:number;
    plan:string;
    estado:Estado;

    constructor(
        id_plan: number = 0,
        plan: string = '',
        estado: Estado = new Estado()
      ) {
        this.id_plan = id_plan;
        this.plan = plan;
        this.estado = estado;
      }
    }
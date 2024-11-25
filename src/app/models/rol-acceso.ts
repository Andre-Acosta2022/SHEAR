import { Acceso } from "./acceso";
import { Rol } from "./rol";

export class AccesoRol {
    id_accesorol:number;
    acceso: Acceso;
    rol: Rol;
    constructor(
        id_accesorol: number = 0,
    acceso: Acceso = new Acceso(),
    rol: Rol = new Rol(),
) {
    this.id_accesorol = id_accesorol;
    this.acceso = acceso;
    this.rol = rol;
}
}

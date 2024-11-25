export class PracticaDetalle {

    nombreEmpresa: string;
    rucEmpresa: string;
    direccionEmpresa: string;
    correoEmpresa: string;
    nombreLinea: string;
    nombrePersona: string;
    apellidoPersona: string;
    cargoRepresentante: string;
    correoPersona: string;
    telefonoPersona: string;
  
    constructor(
      nombreEmpresa: string = '',
      rucEmpresa: string = '',
      direccionEmpresa: string = '',
      correoEmpresa: string = '',
      nombreLinea: string = '',
      nombrePersona: string = '',
      apellidoPersona: string = '',
      cargoRepresentante: string = '',
      correoPersona: string = '',
      telefonoPersona: string = ''
    ) {
      this.nombreEmpresa = nombreEmpresa;
      this.rucEmpresa = rucEmpresa;
      this.direccionEmpresa = direccionEmpresa;
      this.correoEmpresa = correoEmpresa;
      this.nombreLinea = nombreLinea;
      this.nombrePersona = nombrePersona;
      this.apellidoPersona = apellidoPersona;
      this.cargoRepresentante = cargoRepresentante;
      this.correoPersona = correoPersona;
      this.telefonoPersona = telefonoPersona;
    }
  }
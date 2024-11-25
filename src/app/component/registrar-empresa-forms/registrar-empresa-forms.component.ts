import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { Empresa } from '../../models/empresa';
import { RepresentanteLegal } from '../../models/representante-legal';
import { Linea } from '../../models/linea';
import { Estado } from '../../models/estados';
import { Ubigeo } from '../../models/ubigeo';
import { LineaService } from '../../services/linea.service';
import { UbigeoService } from '../../services/ubigeo.service';
import { EmpresaService } from '../../services/empresa.service';
import { RepresentanteLegalService } from '../../services/representante-legal.service';
import { EstadosService } from '../../services/estados.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-registrar-empresa-forms',
  standalone: true,
  imports: [CommonModule,CascadeSelectModule,FormsModule,DropdownModule,ButtonModule],
  templateUrl: './registrar-empresa-forms.component.html',
  styleUrl: './registrar-empresa-forms.component.css'
})
export class RegistrarEmpresaFormsComponent {
  @Output() close = new EventEmitter<void>();
  empresas:Empresa[] = []; // Variable tipada como un arreglo de Solicitud
  representante:RepresentanteLegal[] = [];
  linea:Linea[]=[];
  estado:Estado[]=[];
  ubigeo:Ubigeo[]=[];
  lineas = new Linea();
  empresa= new Empresa();
  representantes= new RepresentanteLegal;
  formattedUbigeo: any[] = [];
  selectedUbigeo: any;
  titulo: string = ''; // Variable vinculada con ngModel para el campo de búsqueda 
  opc:string='';
  op = 1; 
  visible:boolean=false;
  isDeleteInProgress:boolean=false;
  selectedRepresent: RepresentanteLegal | undefined;
  selectedEstado: Estado | undefined;
  selectedEmpresa: Empresa| undefined;
  selectedLinea:Linea | undefined;
  constructor(
    private empresaService: EmpresaService,
    private ubigeoService:UbigeoService,
    private lineaService:LineaService,
    private representanteService: RepresentanteLegalService,
    private estadoService:EstadosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  
  ) {}
  ngOnInit(){
    this.listarUbigeo();
    this.listarEstado();
    this.listarRepresentante();
    this.listarEmpresa();
    this.listarLinea();
    
  }
  
  listarEstado(){
    this.estadoService.getEstadoList().subscribe((data)=>{
      this.estado=data;
      console.log(this.estado)
    },
  
  );
  }
  listarRepresentante(){
    this.representanteService.getRepresentanteLegalList().subscribe((data)=>{
      this.representante=data;
    });
  }
  listarLinea(){
    this.lineaService.getLineaList().subscribe((data)=>{
      this.linea=data;
      console.log(this.linea)
    });
  }
  listarEmpresa() {
    this.empresaService.getEmpresaList().subscribe((data)=>{
      this.empresas=data;
    });
}
  listarUbigeo(){
    this.ubigeoService.getUbigeoList().subscribe((data) => {
      this.ubigeo = data;
      this.formattedUbigeo = this.formatUbigeoForCascadeSelect(this.ubigeo);
    });
  }


 // Método para formatear los datos de ubigeo para el CascadeSelect
 formatUbigeoForCascadeSelect(ubigeos: Ubigeo[]): any[] {
  const departamentos: { [key: string]: any } = {};

  // Asegurarse de que `ubigeos` no sea nulo ni esté vacío
  if (!ubigeos || ubigeos.length === 0) {
    console.error("No hay datos de ubigeo disponibles.");
    return [];
  }

  // Agrupar los datos por departamento, provincia y distrito
  ubigeos.forEach((item) => {
    if (!item.departamento || !item.provincia || !item.distrito) {
      console.warn(`Datos incompletos para el ubigeo: ${JSON.stringify(item)}`);
      return; // Si falta algún dato, no procesamos ese ítem
    }

    // Inicializar el departamento si no existe
    if (!departamentos[item.departamento]) {
      departamentos[item.departamento] = { 
        name: item.departamento, 
        provincias: {} 
      };
    }

    // Inicializar la provincia si no existe dentro del departamento
    if (!departamentos[item.departamento].provincias[item.provincia]) {
      departamentos[item.departamento].provincias[item.provincia] = { 
        name: item.provincia, 
        distritos: [] 
      };
    }

    // Agregar el distrito a la provincia correspondiente
    departamentos[item.departamento].provincias[item.provincia].distritos.push({
      name: item.distrito,
      code: item.id_ubigeo // Usar el `id_ubigeo` como identificador único
    });
  });

  // Transformar el objeto agrupado en un arreglo anidado
  return Object.values(departamentos).map((departamento: any) => ({
    name: departamento.name,
    provincias: Object.values(departamento.provincias).map((provincia: any) => ({
      name: provincia.name,
      distritos: provincia.distritos
    }))
  }));
}
showDialogCreate(){
  this.titulo="Empresa Registrada"
  this.opc="Guardar";   
  this.op=0;
  this.visible = true; // Cambia la visibilidad del diálogo
}
deleteEmpresa(id:number){
  this.isDeleteInProgress = true;
  this.empresaService.deleteEmpresa(id).subscribe({
    next: () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Correcto',
        detail: 'Empresa eliminada',
      });
      this.isDeleteInProgress = false;
      this.listarEmpresa();
    },
    error: () => {
      this.isDeleteInProgress = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo eliminar la Empresa',
      });
    },
  });
}
opcion(){
  if(this.op==0){
    this.addEmpresa();
    this.limpiar();
  }else {
    console.log("No se hace nada");
    this.limpiar();
  }
}
  addEmpresa(){
    this.empresaService.crearEmpresa(this.empresa).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Correcto',
          detail: 'Empresa Registrado',
        });
        this.listarEmpresa();
        this.op=0;
      },
      error: () => {
        this.isDeleteInProgress = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo Crear la Empresa',
        });
      },
    });    
    this.visible = false;
  }

  limpiar(){
    this.titulo='';
  this.opc='';
  this.op = 0; 
    this.empresa.id_empresa = 0;
      this.empresa.nombre = '';
      this.empresa.ruc = 0;
      this.empresa.email = '';
      this.empresa.telefono  = 0;
      this.empresa.direccion='',
      this.empresa.ubigeo.distrito;
      this.empresa.linea.nombre;
      this.empresa.representante.nombre;
      this.empresa.representante.cargo;
      this.empresa.representante.email;
      this.empresa.representante.telefono;
      this.empresa.estado.nombre;
      
  }

  limpiar_rep(){
    this.titulo='';
  this.opc='';
  this.op = 0; 
    this.empresa.id_empresa = 0;
      this.empresa.nombre = '';
      this.empresa.ruc = 0;
      this.empresa.email = '';
      this.empresa.telefono  = 0;
      this.empresa.direccion='',
      this.empresa.ubigeo.distrito;
      this.empresa.linea.nombre;
      this.empresa.representante.nombre;
      this.empresa.representante.cargo;
      this.empresa.representante.email;
      this.empresa.representante.telefono;
      this.empresa.estado.nombre;
      
  }
  cerrarModal() {
    this.close.emit();
  
  }

}

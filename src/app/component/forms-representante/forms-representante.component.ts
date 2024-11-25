import { Component, EventEmitter, Output } from '@angular/core';

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
import { RepresentanteLegal } from '../../models/representante-legal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-representante',
  standalone: true,
  imports: [CommonModule,CascadeSelectModule,FormsModule,DropdownModule,ButtonModule],
  templateUrl: './forms-representante.component.html',
  styleUrl: './forms-representante.component.css'
})
export class FormsRepresentanteComponent {
  @Output() close = new EventEmitter<void>();
 
  representante:RepresentanteLegal[] = [];

  ubigeo:Ubigeo[]=[];
  representantes = new RepresentanteLegal();

  formattedUbigeo: any[] = [];
  selectedUbigeo: any;
  titulo: string = ''; // Variable vinculada con ngModel para el campo de búsqueda 
  opc:string='';
  op = 1; 
  visible:boolean=false;
  isDeleteInProgress:boolean=false;
  selectedRepresent: RepresentanteLegal | undefined;
  constructor(
    private empresaService: EmpresaService,
    private representanteService: RepresentanteLegalService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  
  ) {}
  ngOnInit(){
    this.listarRepresentante();
  }
  
  
  listarRepresentante(){
    this.representanteService.getRepresentanteLegalList().subscribe((data)=>{
      this.representante=data;
    });
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
      this.listarRepresentante();
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
    this.addRepresentante();
    this.limpiar_repre();
  }else {
    console.log("No se hace nada");
    this.limpiar_repre();
  }
}
  addRepresentante(){
    this.representanteService.crearRepresentanteLegal(this.representantes).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Correcto',
          detail: 'Empresa Registrado',
        });
        this.listarRepresentante();
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

  
  limpiar_repre(){
    this.titulo='';
  this.opc='';
  this.op = 0; 
    this.representantes.id_representante = 0;
      this.representantes.nombre = '';
      this.representantes.cargo='';
      this.representantes.email= '';
      this.representantes.telefono  = 0;

      
  }
  cerrarModal() {
    this.close.emit();
  
  }
}


import { RepresentanteLegal } from '../../models/representante-legal';
import { Empresa } from '../../models/empresa';
import { Linea } from '../../models/linea';
import { Estado } from '../../models/estados';
import { Ubigeo } from '../../models/ubigeo';
import { Practica } from '../../models/practica';
import { UbigeoService } from '../../services/ubigeo.service';
import { LineaService } from '../../services/linea.service';
import { RepresentanteLegalService } from '../../services/representante-legal.service';
import { EstadosService } from '../../services/estados.service';
import { EmpresaService } from '../../services/empresa.service';
import { PracticaService } from '../../services/practica.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { PracticaFormsComponent } from '../practica-forms/practica-forms.component';
import { Component, OnInit } from '@angular/core';
import { RegistrarEmpresaFormsComponent } from '../registrar-empresa-forms/registrar-empresa-forms.component';

@Component({
  selector: 'app-listar-practica',
  standalone: true,
  imports: [RegistrarEmpresaFormsComponent,PracticaFormsComponent,DividerModule, TableModule, ButtonModule, InputTextModule,
    CommonModule, ConfirmDialogModule, ToastModule, DropdownModule],
  templateUrl: './listar-practica.component.html',
  styleUrl: './listar-practica.component.css'
})
export class ListarPracticaComponent implements OnInit {
  representante:RepresentanteLegal[]=[];
  linea:Linea[]=[];
  estado:Estado[]=[];
  ubigeo:Ubigeo[]=[];
  empresa:Empresa[]= [];
  practica:Practica[]=[];
  representantes = new RepresentanteLegal();
  empresas= new Empresa();
  practicas= new Practica();
  lineas = new Linea();
  formattedUbigeo: any[] = [];
  selectedUbigeo: any;

  visible:boolean=false;
  isDeleteInProgress:boolean=false;
  titulo:string='';
  titulos: string = 'Registrar Empresa';  // Titulo del diálogo
  opc:string='';
  op = 1; 
  dialogVisible: boolean = false;
  dialogoVisualizar: boolean = false;
  loading: boolean = true;
  filteredRepresentantes: RepresentanteLegal[] = [];
  filteredEmpresas: Empresa[] = [];  // Para almacenar el filtro de empresas
  
 
  selectedRepresent: RepresentanteLegal | undefined;
  selectedEstado: Estado | undefined;
  selectedEmpresa: Empresa| undefined;
  selectedLinea:Linea | undefined;
  

  constructor(
    private fb: FormBuilder,
    private ubigeoService: UbigeoService,
    private  lineaService:LineaService,
    private representanteService: RepresentanteLegalService,
    private estadoService:EstadosService,
    private empresaService:EmpresaService,
    private practicaService:PracticaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  

    
  ){}
  ngOnInit(){
    this.listarEstado();
    this.listarRepresentante();
    this.listarEmpresa();
    this.listarLinea();
    this.listarPractica();
  }
  
  listarEstado(){
    this.estadoService.getEstadoList().subscribe((data)=>{
      this.estado=data;
      console.log(this.estado)
    });
  }

  listarEmpresa() {
    this.empresaService.getEmpresaList().subscribe((data)=>{
      this.empresa=data;
    });
}
filterEmpresas(event: AutoCompleteCompleteEvent) {
  let filtered: Empresa[] = [];
  let query = event.query;
  for (let i = 0; i < this.empresa.length; i++) {
    let empresa = this.empresa[i];
    if (empresa.nombre.toLowerCase().includes(query.toLowerCase())) {
      filtered.push(empresa);
    }
  }
  this.filteredEmpresas = filtered;
}

 // Lógica para guardar la empresa (nueva o registrada)

  listarRepresentante(){
    this.representanteService.getRepresentanteLegalList().subscribe((data)=>{
      this.representante=data;
    });
  }
  listarPractica(){
    this.practicaService.getPracticaList().subscribe((data)=>{
      this.practica=data;
    });
  }
  listarLinea(){
    this.lineaService.getLineaList().subscribe((data)=>{
      this.linea=data;
      console.log(this.linea)
    });
  }

  
  showDialogCreate(){
    this.titulo="Practica Registrada"
    this.opc="Guardar";   
    this.op=0;
    this.visible = true; // Cambia la visibilidad del diálogo
  }
  showDialogEdit(id:number){
    this.titulo="Editar Practica"
    this.opc="Editar"; 
    this.practicaService.getPracticaById(id).subscribe((data)=>{
      this.practicas=new Practica(); 
      this.op=1;     
   });    
    this.visible = true; // Cambia la visibilidad del diálogo
  }
  deletePractica(id:number){
    this.isDeleteInProgress = true;
    this.practicaService.deletePractica(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Correcto',
          detail: 'Practica eliminada',
        });
        this.isDeleteInProgress = false;
        this.listarPractica();
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
      this.addPractica();
      this.limpiar();
    }else if(this.op==1){
      console.log("Editar");
      this.editPractica();
      this.limpiar();
    }else{
      console.log("No se hace nada");
      this.limpiar();
    }
  }
    addPractica(){
      this.practicaService.crearPractica(this.practicas).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Correcto',
            detail: 'Practica Registrada',
          });
          this.listarEmpresa();
          this.op=0;
        },
        error: () => {
          this.isDeleteInProgress = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo Crear la Practica',
          });
        },
      });    
      this.visible = false;
    }
    editPractica(){
      this.practicaService.updatePractica(this.practicas,this.practicas.id_practica).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Correcto',
            detail: 'Practicas Editada',
          });
          this.listarPractica();
          this.op=0;
        },
        error: () => {
          this.isDeleteInProgress = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo Editar Practicas',
          });
        },
      });    
      this.visible = false;
    }
    limpiar(){
      this.titulo='';
    this.opc='';
    this.op = 0; 
      this.practicas.id_practica=0;
      this.practicas.practicante;
      this.practicas.empresa.nombre;
        this.practicas.linea.nombre;
        this.practicas.plancarrera;
        this.practicas.fecha_inicio;
        this.practicas.estado.nombre;
        this.practicas.supervisor;
        this.practicas.fecha_fin;
        this.practicas.horas_plan;
        this.practicas.nota_academica;
        this.practicas.nota_empresarial;
        this.practicas.ponderado_final;
       
        
    }

    closeDialog() {
      this.visible = false;
    }
  
    modalpractica = false;
    modalempresa = false;
    abrirpractica() {
      this.modalpractica = true;
    }
  
    cerrarpractica() {
      this.modalpractica = false;
    }
    abrirempresa() {
      this.modalempresa = true;
    }
  
    cerrarempresa() {
      this.modalempresa = false;
    }
    openDialogo() {
      this.confirmationService.confirm({
        message: '¿Estás seguro de guardar los cambios?',
        header: 'Confirmación',
        icon: 'pi pi-question-circle',
        accept: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Guardado',
            detail: 'Cambios guardados exitosamente.',
          });
          this.dialogVisible = true; // Abrir el diálogo
        },
        reject: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Cancelado',
            detail: 'El guardado fue cancelado.',
          });
        },
      });
    }
    
    closeDialogo() {
      this.confirmationService.confirm({
        message: '¿Estás seguro de cancelar la operación?',
        header: 'Cancelar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.add({
            severity: 'warn',
            summary: 'Cancelado',
            detail: 'La operación fue cancelada.',
          });
          this.dialogVisible = false; // Cerrar el diálogo
        },
        reject: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Continuar',
            detail: 'La operación continúa.',
          });
        },
      });
    }

}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { Linea } from '../../models/linea';
import { Estado } from '../../models/estados';
import { Practica } from '../../models/practica';
import { Empresa } from '../../models/empresa';
import { LineaService } from '../../services/linea.service';
import { EstadosService } from '../../services/estados.service';
import { EmpresaService } from '../../services/empresa.service';
import { PracticaService } from '../../services/practica.service';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-practica-forms',
  standalone: true,
  imports: [DividerModule,FormsModule,AutoCompleteModule,CommonModule,DialogModule,  ConfirmDialogModule, ToastModule, DropdownModule],
  templateUrl: './practica-forms.component.html',
  styleUrl: './practica-forms.component.css'
})
export class PracticaFormsComponent {
  @Output() close = new EventEmitter<void>();

  cerrarpractica() {
    this.close.emit();
  }
  empresa:Empresa []= [];
  practica:Practica[]=[];
  linea:Linea[]=[];
  estado:Estado []=[];
  dialogVisible: boolean = false;
  dialogoVisualizar: boolean = false;
  visible:boolean=false;
  titulo:string='';
  titulos: string = 'Registrar Practica';  // Titulo del diálogo
  opc:string='';
  op = 1; 
  empresas= new Empresa();
  lineas = new Linea();
  practicas = new Practica();
  isDeleteInProgress:boolean=false;
  selectedEstado: Estado | undefined;
  selectedEmpresa: Empresa| undefined;
  selectedLinea:Linea | undefined;

  constructor(
   
    private  lineaService:LineaService,
    private estadoService:EstadosService,
    private empresaService:EmpresaService,
    private practicaService:PracticaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    
  ){}

  ngOnInit(){
    this.listarEstado();
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
  listarEmpresa() {
    this.empresaService.getEmpresaList().subscribe((data)=>{
      this.empresa=data;
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
          detail: 'Empresa Registrado',
        });
        this.listarPractica();
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
          detail: 'Empresa Editada',
        });
        this.listarPractica();
        this.op=0;
      },
      error: () => {
        this.isDeleteInProgress = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo Editar Empresa',
        });
      },
    });    
    this.visible = false;
  }
  limpiar(){
    this.titulo='';
  this.opc='';
  this.op = 0; 
    this.practicas.id_practica = 0;
      this.practicas.empresa.nombre;
      this.empresas.linea.nombre;
      this.empresas.email = '';
      this.empresas.estado.nombre;
      
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

import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TiposDocumentos } from '../../models/tipodocumento';
import { EstadosService } from '../../services/estados.service';
import { Estado } from '../../models/estados';
import { TipoDocumentoService } from '../../services/tipo_documento.service';



@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [TableModule, ButtonModule,CommonModule],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent {

  tipodocumento:TiposDocumentos[]=[];
  estados:Estado[]=[];

  constructor(
    private estadosService: EstadosService,
    private tipoDocumentoService: TipoDocumentoService,
  ){}

  ngOnInit(): void {
    this.cargarTipo_documento();
  }

  cargarTipo_documento(): void {
    this.tipoDocumentoService.getTiposDocumento().subscribe({
      next: (data) => {
        this.tipodocumento = data; 
      },
      error: (err) => {
        console.error('Error al cargar los documentos', err);
      },
    });
  }

  guardarDatos() {
    console.log('Formulario enviado correctamente');
  }
}

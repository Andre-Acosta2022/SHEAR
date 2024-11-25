import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PracticaService } from '../../services/practica.service';
import { PracticaDetalleComponent } from '../practica-detalle/practica-detalle.component';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [PracticaDetalleComponent,CommonModule,NgIf,NgFor,FormsModule, InputTextModule, ButtonModule,NgStyle],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent implements OnInit {
  practicas: any[] = []; // Variable tipada como un arreglo de Practica
  value: string = ''; // Variable vinculada con ngModel para el campo de búsqueda
  mostrarDetalle: boolean = false; // Controla la visibilidad del modal
  idSeleccionado: number | null = null; // Permitir que sea null
 // Almacena el ID seleccionado

  constructor(private practicaService: PracticaService) {}

  

  ngOnInit(): void {
    this.practicaService.getPracticaList().subscribe((data) => {
      console.log('Listado de prácticas:', data); // Verifica que cada práctica tenga un atributo id
      this.practicas = data; // La respuesta del backend se asigna a 'practicas'
    });
  }

  verDetalle(id: number): void {
    console.log('ID seleccionado:', id); // Verifica el ID
    this.idSeleccionado = id; // Asigna el ID seleccionado
    this.mostrarDetalle = true; // Muestra el modal
  }

  cerrarModal(): void {
    this.mostrarDetalle = false; // Oculta el modal
    this.idSeleccionado = null; // Limpia el ID seleccionado
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PracticaDetalle } from '../models/PracticaDetalle';
@Injectable({
  providedIn: 'root'
})
export class PracticaDetalleService {

  private apiUrl = 'http://localhost:8080/api/detalle'; // URL del backend para obtener las prácticas

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de prácticas con la información solicitada
  getDetalleSolicitudById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
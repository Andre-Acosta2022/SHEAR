import { Injectable } from '@angular/core';
import { RepresentanteLegal } from '../models/representante-legal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteLegalService {


  private apiUrl = 'http://localhost:8080/api/representante-legal';

  constructor(private http: HttpClient) { }

  // Obtener la lista de representantes legales
  getRepresentanteLegalList(): Observable<RepresentanteLegal[]> {
    return this.http.get<RepresentanteLegal[]>(this.apiUrl);
  }

  // Obtener un representante legal por su ID
  getRepresentanteLegalById(id_representante: number): Observable<RepresentanteLegal> {
    return this.http.get<RepresentanteLegal>(`${this.apiUrl}/${id_representante}`);
  }

  // Crear un nuevo representante legal
  crearRepresentanteLegal(representanteLegal: RepresentanteLegal): Observable<RepresentanteLegal> {
    return this.http.post<RepresentanteLegal>(this.apiUrl, representanteLegal);
  }

  // Eliminar un representante legal por su ID
  deleteRepresentanteLegal(id_representante: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id_representante}`);
  }

  // Actualizar un representante legal existente
  updateRepresentanteLegal(representanteLegal: RepresentanteLegal, id_representante: number): Observable<RepresentanteLegal> {
    return this.http.put<RepresentanteLegal>(`${this.apiUrl}/${id_representante}`, representanteLegal);
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/estados';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private apiUrl='http://localhost:8080/api/estado-ppp';
  constructor(private http:HttpClient) { }
  
  getEstadoList():Observable<Estado[]>{
  return this.http.get<Estado[]>(this.apiUrl);
  }
  getEstadoById(id_estados:number):Observable<Estado>{
    return this.http.get<Estado>(`${this.apiUrl}/${id_estados}`);
  }
  
  crearEstado(estado:Estado):Observable<Estado>{
    return this.http.post<Estado>(this.apiUrl, estado);
  }
  
  deleteUbigeo(id_estados:number){
    return this.http.delete(`${this.apiUrl}/${id_estados}`);
  }
  
  updateUbigeo(estado:Estado, id_estados:number):Observable<Estado>{
    return this.http.put<Estado>(`${this.apiUrl}/${id_estados}`, estado);
  }
}

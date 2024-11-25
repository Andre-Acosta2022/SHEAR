import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Linea } from '../models/linea';

@Injectable({
  providedIn: 'root'
})
export class LineaService {

  private apiUrl='http://localhost:8080/api/linea';  
  constructor(private http:HttpClient) { }
  
  getLineaList():Observable<Linea[]>{
  return this.http.get<Linea[]>(this.apiUrl);
  }
  getLineaById(id_linea:number):Observable<Linea>{
    return this.http.get<Linea>(`${this.apiUrl}/${id_linea}`);
  }
  
  crearLinea(linea:Linea):Observable<Linea>{
    return this.http.post<Linea>(this.apiUrl, linea);
  }
  
  deleteLinea(id_linea:number){
    return this.http.delete(`${this.apiUrl}/${id_linea}`);
  }
  
  updateLinea(linea:Linea, id_linea:number):Observable<Linea>{
    return this.http.put<Linea>(`${this.apiUrl}/${id_linea}`, linea);
  }
}

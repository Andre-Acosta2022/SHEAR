import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Practica } from '../models/practica';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  private apiUrl='http://localhost:8080/api/practica';
  constructor(private http:HttpClient) { }
  
  getPracticaList():Observable<Practica[]>{
  return this.http.get<Practica[]>(this.apiUrl);
  }
  getPracticaById(id_practica:number):Observable<Practica>{
    return this.http.get<Practica>(`${this.apiUrl}/${id_practica}`);
  }
  
  crearPractica(practica:Practica):Observable<Practica>{
    return this.http.post<Practica>(this.apiUrl, practica);
  }
  
  deletePractica(id_practica:number){
    return this.http.delete(`${this.apiUrl}/${id_practica}`);
  }
  
  updatePractica(practica:Practica, id_practica:number):Observable<Practica>{
    return this.http.put<Practica>(`${this.apiUrl}/${id_practica}`, practica);
  }
}

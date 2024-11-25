import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Practicante } from '../models/practicante';

@Injectable({
  providedIn: 'root'
})
export class PracticanteService {

  private apiUrl='http://localhost:8080/api/practicante';
  constructor(private http:HttpClient) { }
  
  getPracticanteList():Observable<Practicante[]>{
  return this.http.get<Practicante[]>(this.apiUrl);
  }
  getPracticanteById(id_practicante:number):Observable<Practicante>{
    return this.http.get<Practicante>(`${this.apiUrl}/${id_practicante}`);
  }
  
  crearPracticante(practicante:Practicante):Observable<Practicante>{
    return this.http.post<Practicante>(this.apiUrl, practicante);
  }
  
  deletePracticante(id_practicante:number){
    return this.http.delete(`${this.apiUrl}/${id_practicante}`);
  }
  
  updatePracticante(practicante:Practicante, id_practicante:number):Observable<Practicante>{
    return this.http.put<Practicante>(`${this.apiUrl}/${id_practicante}`, practicante);
  }
}

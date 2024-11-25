import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../models/ubigeo';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
  private apiUrl='http://localhost:8080/api/ubigeo';
  constructor(private http:HttpClient) { }
  
  getUbigeoList():Observable<Ubigeo[]>{
  return this.http.get<Ubigeo[]>(this.apiUrl);
  }
  getUbigeoById(id_ubigeo:number):Observable<Ubigeo>{
    return this.http.get<Ubigeo>(`${this.apiUrl}/${id_ubigeo}`);
  }
  
  crearUbigeo(ubigeo:Ubigeo):Observable<Ubigeo>{
    return this.http.post<Ubigeo>(this.apiUrl, ubigeo);
  }
  
  deleteUbigeo(id_ubigeo:number){
    return this.http.delete(`${this.apiUrl}/${id_ubigeo}`);
  }
  
  updateUbigeo(ubigeo:Ubigeo, id_ubigeo:number):Observable<Ubigeo>{
    return this.http.put<Ubigeo>(`${this.apiUrl}/${id_ubigeo}`, ubigeo);
  }
}

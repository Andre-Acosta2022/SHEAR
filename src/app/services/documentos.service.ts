import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documentos } from '../models/documentos';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private apiUrl='http://localhost:8080/api/documentos';
  constructor(private http:HttpClient) { }
  
  getDocumentosList():Observable<Documentos[]>{
  return this.http.get<Documentos[]>(this.apiUrl);
  }
  getDocumentosById(id_documentos:number):Observable<Documentos>{
    return this.http.get<Documentos>(`${this.apiUrl}/${id_documentos}`);
  }
  
  crearDocumentos(documentos:Documentos):Observable<Documentos>{
    return this.http.post<Documentos>(this.apiUrl, documentos);
  }
  
  deleteDocumentos(id_documentos:number){
    return this.http.delete(`${this.apiUrl}/${id_documentos}`);
  }
  
  updateDocumentos(documentos:Documentos, id_documentos:number):Observable<Documentos>{
    return this.http.put<Documentos>(`${this.apiUrl}/${id_documentos}`,documentos);
  }
}

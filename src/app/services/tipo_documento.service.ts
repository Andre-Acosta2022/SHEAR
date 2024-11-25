import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TiposDocumentos} from '../models/tipodocumento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private apiUrl = 'http://localhost:8080/api/tipo-documento';

  constructor(private http: HttpClient) {}

  getTiposDocumento(): Observable<TiposDocumentos[]> {
    return this.http.get<TiposDocumentos[]>(this.apiUrl);
  }

  getTipoDocumentoById(id: number): Observable<TiposDocumentos> {
    return this.http.get<TiposDocumentos>(`${this.apiUrl}/${id}`);
  }

  crearTipoDocumento(tipoDocumento: TiposDocumentos): Observable<TiposDocumentos> {
    return this.http.post<TiposDocumentos>(this.apiUrl, tipoDocumento);
  }

  deleteTipoDocumento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateTipoDocumento(tipoDocumento: TiposDocumentos, id: number): Observable<TiposDocumentos> {
    return this.http.put<TiposDocumentos>(`${this.apiUrl}/${id}`, tipoDocumento);
  }
}

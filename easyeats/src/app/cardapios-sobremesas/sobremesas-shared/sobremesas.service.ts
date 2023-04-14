import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobremesasService {

  private API = "http://localhost:3000/";

  constructor( private httpClient:HttpClient ) { }

  listaAperitivos(): Observable<any>{
    return this.httpClient.get<SobremesasService[]>(`${this.API}lista-sobremesas`).pipe(
      res => res,
      error => error
    )
  }

  criarAperitivos(record: SobremesasService):Observable<any>{
    return this.httpClient.post<SobremesasService[]>(`${this.API}lista-sobremesas`, record).pipe(
      first()
    )
  }

  excluirAperitivos(id:number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API}lista-sobremesas/${id}`).pipe(
      res => res,
      error => error
    )
  }
}

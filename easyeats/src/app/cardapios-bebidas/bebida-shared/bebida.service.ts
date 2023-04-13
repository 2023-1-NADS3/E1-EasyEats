import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BebidaModel } from './bebida.model';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  private API = "http://localhost:3000/";

  constructor( private httpClient:HttpClient ) { }

  listarBebidas():Observable<any>{
    return this.httpClient.get<BebidaModel[]>(`${this.API}lista-bebidas`).pipe(
      res => res,
      error => error
    )
  }

  criarBebidas(record:BebidaModel):Observable<any>{
    return this.httpClient.post<BebidaModel[]>(`${this.API}lista-bebidas`, record).pipe(
      res => res,
      error => error
    )
  }

  deletarBebida(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.API}lista-bebidas/${id}`).pipe(
      res => res,
      error => error
    )
  }











}

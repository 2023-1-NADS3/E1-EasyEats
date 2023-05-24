import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { PratosModel } from './pratos-model';

@Injectable({
  providedIn: 'root'
})
export class PratosSharedService {

  private API = "http://localhost:3000/";

  constructor( private httpClient:HttpClient ) { }

  listaPratos():Observable<any>{
    return this.httpClient.get<PratosModel[]>(`${this.API}lista-pratos`).pipe(
      res => res,
      error => error
    )
  }

  criarPratos(record: PratosModel):Observable<any>{
    return this.httpClient.post<PratosModel[]>(`${this.API}lista-pratos`, record).pipe(
      first()
    )
  }

  excluirPratos(id:number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API}lista-pratos/${id}`).pipe(
      res => res,
      error => error
    )
  }
}

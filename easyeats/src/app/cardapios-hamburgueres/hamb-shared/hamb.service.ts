import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { HamburguerModel } from './hamb-model';

@Injectable({
  providedIn: 'root'
})
export class HambService {

  private API = "http://localhost:3000/";

  constructor( private httpClient:HttpClient ) { }

  listarHamburguers():Observable<any>{
    return this.httpClient.get<HamburguerModel[]>(`${this.API}lista-hamburguers`).pipe(
      res => res,
      error => error
    )
  }

  criarHamburguers(record:HamburguerModel):Observable<any>{
    return this.httpClient.post<HamburguerModel[]>(`${this.API}lista-hamburguers`, record).pipe(
      first()
    )
  }

  public excluirHamburhueres(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API}lista-hamburguers/${id}`).pipe(
      res => res,
      error => error
    )
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { HamburguerModel } from './hamb-model';

@Injectable({
  providedIn: 'root'
})
export class HambService {

  private readonly API = "";

  constructor( private httpClient:HttpClient ) { }

  listarHamburguers():Observable<any>{
    return this.httpClient.get<HamburguerModel[]>(this.API)
  }

  criarHamburguers(record:HamburguerModel):Observable<any>{
    return this.httpClient.post<HamburguerModel[]>(this.API, record).pipe(
      first()
    )
  }

  excluirHamburgueres(id:number){
    return this.httpClient.delete<HamburguerModel[]>(`${this.API}/${id}`)
  }

}

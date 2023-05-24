import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-fritas',
  templateUrl: './fritas.component.html',
  styleUrls: ['./fritas.component.css']
})
export class FritasComponent {
  constructor(private http: HttpClient, private router: Router) {}

  adicionaComida() {
    console.log("Função Acionada");

    let item = "Porção de Fritas";
    let preco = "R$19,99";

    $.post(
      'http://localhost:3000/adicionaItem',
      {
        "item": item,
        "preco": preco 
      },
      (res) => {
        console.log('Enviei o Json do Item');
        console.log(res);
        if (res === 'Item Atualiazado') {
          this.router.navigate(['/carrinho']);
        } else {
          alert('Erro no Banco, Refaça o Login.');
        } 
      }
    );
  }
}

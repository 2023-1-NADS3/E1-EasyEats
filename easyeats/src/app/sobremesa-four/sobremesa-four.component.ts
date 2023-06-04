import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-sobremesa-four',
  templateUrl: './sobremesa-four.component.html',
  styleUrls: ['./sobremesa-four.component.css']
})
export class SobremesaFourComponent {
  constructor(private  http: HttpClient, private router: Router) {
    this.titulo = 'Bolo de milho'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Bolo e milho'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/sobremesas/4.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '13,18'; // Inicialização da propriedade 'preco' no construtor
  }

  
  titulo: string; // Declaração da propriedade 'titulo' sem inicialização
  descricao: string; // Declaração da propriedade 'descrição' sem inicialização
  img: string; // Declaração da propriedade 'img' sem inicialização
  preco: string; // Declaração da propriedade 'preço' sem inicialização

  adicionaComida() {
    console.log("Função Acionada");

    let item = "Bolo de milho";
    let preco = "R$ 13,18";

    $.post(
      'http://localhost:3000/adicionaItem',
      {
        "item": item,
        "preco": preco 
      },
      (res) => {
        console.log('Enviei o Json do Item');
        console.log(res);
        if (res === 'Item Atualizado') {
          this.router.navigate(['/carrinho']);
        } else {
          alert('Erro no Banco, Refaça o Login.');
        } 
      }
    );
  }
}

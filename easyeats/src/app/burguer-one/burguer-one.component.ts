import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-burguer-one',
  templateUrl: './burguer-one.component.html',
  styleUrls: ['./burguer-one.component.css']
})
export class BurguerOneComponent {
  constructor(private  http: HttpClient, private router: Router) {
    this.titulo = 'Capão Redondo Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Hamburguer, bacon, cebola, maionese e pão né'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/hamburguer/1.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '81,67'; // Inicialização da propriedade 'preco' no construtor
  }

  
  titulo: string; // Declaração da propriedade 'titulo' sem inicialização
  descricao: string; // Declaração da propriedade 'descrição' sem inicialização
  img: string; // Declaração da propriedade 'img' sem inicialização
  preco: string; // Declaração da propriedade 'preço' sem inicialização

  adicionaComida() {
    console.log("Função Acionada");

    let item = "Capão Redondo Eats";
    let preco = "R$ 81,67";

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

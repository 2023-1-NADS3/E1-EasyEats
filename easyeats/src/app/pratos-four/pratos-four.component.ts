import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-pratos-four',
  templateUrl: './pratos-four.component.html',
  styleUrls: ['./pratos-four.component.css']
})
export class PratosFourComponent {
  constructor(private  http: HttpClient, private router: Router) {
    this.titulo = 'Risoto de Camarão'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Camarão'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/pastas/4.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '32,99'; // Inicialização da propriedade 'preco' no construtor
  }

  
  titulo: string; // Declaração da propriedade 'titulo' sem inicialização
  descricao: string; // Declaração da propriedade 'descrição' sem inicialização
  img: string; // Declaração da propriedade 'img' sem inicialização
  preco: string; // Declaração da propriedade 'preço' sem inicialização

  adicionaComida() {
    console.log("Função Acionada");

    let item = "Risoto de Camarão";
    let preco = "R$ 32,99";

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

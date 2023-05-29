import { Component } from '@angular/core';


@Component({
  selector: 'app-cardapio-hamburguer',
  templateUrl: './cardapio-hamburguer.component.html',
  styleUrls: ['./cardapio-hamburguer.component.css']
})
export class CardapioHamburguerComponent {

  burguers = [
    {
      imagem: '../../../assets/imagens/aperitivos/batata.png',
      nome: 'X-Tudão',
      descricao: 'Dois hamburgueres, alface, queijo, molho especial, cebola, picles e um pão com gergilim',
      preco: 'R$ 19,99',
      link: '../burguerOne'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/bolin.png',
      nome: 'X-Salada',
      descricao: 'Salada ué',
      preco: 'R$ 19,99',
      link: '../burguerTwo'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/coxinha.png',
      nome: 'X-Maionese',
      descricao: 'Pão e Maionese',
      preco: 'R$ 19,99',
      link: '../burguerThree'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/frnaguinho.png',
      nome: 'X-Planta sem X',
      descricao: 'Pão de planta, carne de planta, queijo de planta',
      preco: 'R$ 19,99',
      link: '../burguerFour'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/onion.png',
      nome: 'X-Jaca',
      descricao: 'Jaca Australiano e pão de carne',
      preco: 'R$ 19,99',
      link: '../burguerFive'
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-bebida',
  templateUrl: './cardapio-bebida.component.html',
  styleUrls: ['./cardapio-bebida.component.css']
})
export class CardapioBebidaComponent {
  burguers = [
    {
      imagem: '../../../assets/imagens/sobremesas/1.1.png',
      nome: 'X-Tudão',
      descricao: 'Dois hamburgueres, alface, queijo, molho especial, cebola, picles e um pão com gergilim',
      preco: 'R$ 19,99',
      link: '../sobremesasOne'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/2.1.png',
      nome: 'X-Salada',
      descricao: 'Salada ué',
      preco: 'R$ 19,99',
      link: '../sobremesasTwo'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/3.1.png',
      nome: 'X-Maionese',
      descricao: 'Pão e Maionese',
      preco: 'R$ 19,99',
      link: '../sobremesasThree'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/4.1.png',
      nome: 'X-Planta sem X',
      descricao: 'Pão de planta, carne de planta, queijo de planta',
      preco: 'R$ 19,99',
      link: '../sobremesasFour'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/5.1.png',
      nome: 'X-Jaca',
      descricao: 'Jaca Australiano e pão de carne',
      preco: 'R$ 19,99',
      link: '../sobremesasFive'
    },
  ];
}

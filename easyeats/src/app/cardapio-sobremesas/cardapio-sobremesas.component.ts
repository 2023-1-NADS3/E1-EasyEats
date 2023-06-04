import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-sobremesas',
  templateUrl: './cardapio-sobremesas.component.html',
  styleUrls: ['./cardapio-sobremesas.component.css']
})
export class CardapioSobremesasComponent {
  burguers = [
    {
      imagem: '../../../assets/imagens/sobremesas/1.1.png',
      nome: 'Sobremesa',
      descricao: 'Dois hamburgueres, alface, queijo, molho especial, cebola, picles e um pão com gergilim',
      preco: 'R$ 19,99',
      link: '../sobremesaOne'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/2.1.png',
      nome: 'Sobremesa',
      descricao: 'Salada ué',
      preco: 'R$ 19,99',
      link: '../sobremesaTwo'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/3.1.png',
      nome: 'Sobremesa',
      descricao: 'Pão e Maionese',
      preco: 'R$ 19,99',
      link: '../sobremesaThree'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/4.1.png',
      nome: 'Sobremesa',
      descricao: 'Pão de planta, carne de planta, queijo de planta',
      preco: 'R$ 19,99',
      link: '../sobremesaFour'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/5.1.png',
      nome: 'Sobremesa',
      descricao: 'Jaca Australiano e pão de carne',
      preco: 'R$ 19,99',
      link: '../sobremesaFive'
    },
  ];
}

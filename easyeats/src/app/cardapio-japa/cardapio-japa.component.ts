import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-japa',
  templateUrl: './cardapio-japa.component.html',
  styleUrls: ['./cardapio-japa.component.css']
})
export class CardapioJapaComponent {
  burguers = [
    {
      imagem: '../../../assets/imagens/japa/1.1.png',
      nome: 'Japa 1',
      descricao: 'Japa ué',
      preco: 'R$ 19,99',
      link: '../japaOne'
    },
    {
      imagem: '../../../assets/imagens/japa/2.1.png',
      nome: 'Japa 2',
      descricao: 'Japa ué',
      preco: 'R$ 19,99',
      link: '../japaTwo'
    },
    {
      imagem: '../../../assets/imagens/japa/3.1.png',
      nome: 'Japa 3',
      descricao: 'Japa ué',
      preco: 'R$ 19,99',
      link: '../japaThree'
    },
    {
      imagem: '../../../assets/imagens/japa/4.1.png',
      nome: 'Japa 4',
      descricao: 'Japa ué',
      preco: 'R$ 19,99',
      link: '../japaFour'
    },
    {
      imagem: '../../../assets/imagens/japa/5.1.png',
      nome: 'Japa 5',
      descricao: 'Japa ué',
      preco: 'R$ 19,99',
      link: '../japaFive'
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-pratos',
  templateUrl: './cardapio-pratos.component.html',
  styleUrls: ['./cardapio-pratos.component.css']
})
export class CardapioPratosComponent {

  burguers = [
    {
      imagem: '../../../assets/imagens/pratos/1.1.png',
      nome: 'Macarrão com Requeijão',
      descricao: 'Macarrão e Requeijão',
      preco: 'R$ 19,99',
      link: '../prato-one'
    },
    {
      imagem: '../../../assets/imagens/pratos/2.1.png',
      nome: 'Prato Feito',
      descricao: 'Arroz, Feijão, Bife e Batata Frita',
      preco: 'R$ 19,99',
      link: '../prato-two'
    },
    {
      imagem: '../../../assets/imagens/pratos/3.1.png',
      nome: 'Strogonoff',
      descricao: 'Estro go nofe',
      preco: 'R$ 19,99',
      link: '../prato-three'
    },
    {
      imagem: '../../../assets/imagens/pratos/4.1.png',
      nome: 'Risoto de Camarão',
      descricao: 'Camarão',
      preco: 'R$ 19,99',
      link: '../prato-four'
    },
    {
      imagem: '../../../assets/imagens/pratos/5.1.png',
      nome: 'Galinhada',
      descricao: 'Na verdade não sabemos se é frango ou galinha ',
      preco: 'R$ 19,99',
      link: '../prato-five'
    },
  ];
}

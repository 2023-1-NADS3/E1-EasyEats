import { Component } from '@angular/core';
import { AperitivosModel } from '../aperitivos-shared/aperitivos.model';
import { AperitivosService } from '../aperitivos-shared/aperitivos.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarAperitivosComponent } from '../criar-aperitivos/criar-aperitivos.component';

@Component({
  selector: 'app-listar-aperitivos',
  templateUrl: './listar-aperitivos.component.html',
  styleUrls: ['./listar-aperitivos.component.css']
})
export class ListarAperitivosComponent {

  public listaAperitivos: AperitivosModel | any;

  constructor(
    private service: AperitivosService,
    public dialog: MatDialog
  ){}

  aperitivos = [
    {
      imagem: '../../../assets/imagens/aperitivos/batata.png',
      nome: 'Porção de Fritas',
      descricao: 'Crocante por fora e fofinha por dentro',
      preco: 'R$ 19,99',
      link: '../porcao-de-fritas'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/bolin.png',
      nome: 'Porção Bolinho',
      descricao: 'Crocante por fora e fofinha por dentro',
      preco: 'R$ 19,99',
      link: '../porcao-bolinho'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/coxinha.png',
      nome: 'Porção de Coxinha',
      descricao: 'Crocante por fora e fofinha por dentro',
      preco: 'R$ 19,99',
      link: '../porcao-coxinha'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/frnaguinho.png',
      nome: 'Porção Franguin',
      descricao: 'Crocante por fora e fofinha por dentro',
      preco: 'R$ 19,99',
      link: '../porcao-franguinho'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/onion.png',
      nome: 'Porção Onion Rings',
      descricao: 'Crocante por fora e fofinha por dentro',
      preco: 'R$ 19,99',
      link: '../porcao-onion'
    },
  ];

  ngOnInit():void{
    this.service.listaAperitivos().subscribe(
      res => this.listaAperitivos = res,
      error => error
    )
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(CriarAperitivosComponent);
  }

  onDelete(id: number){
    this.service.excluirAperitivos(id).subscribe(
      res => {
        this.listaAperitivos = this.listaAperitivos.filter()
      },
      error => error
    ), location.reload()
  }

}

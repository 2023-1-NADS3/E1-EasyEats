import { Component } from '@angular/core';
import { BebidaModel } from '../bebida-shared/bebida.model';
import { BebidaService } from '../bebida-shared/bebida.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarBebidasComponent } from '../criar-bebidas/criar-bebidas.component';

@Component({
  selector: 'app-listar-bebidas',
  templateUrl: './listar-bebidas.component.html',
  styleUrls: ['./listar-bebidas.component.css']
})
export class ListarBebidasComponent {

  public listaBebida: BebidaModel | any;

  constructor(
    private service: BebidaService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void{
    this.service.listarBebidas().subscribe(
      res => this.listaBebida = res,
      error => error
    )
  }

  onAdd():void {
    const dialogRef = this.dialog.open(CriarBebidasComponent)
  }

  onDelete(id: number){
    this.service.deletarBebida(id).subscribe(
      res => {
        this.listaBebida = this.listaBebida.filter()
      },
      error => error
    ), location.reload()
  }

}

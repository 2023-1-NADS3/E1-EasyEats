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

import { Component } from '@angular/core';
import { PratosModel } from '../pratos-shared/pratos-model';
import { PratosSharedService } from '../pratos-shared/pratos-shared.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarPratosComponent } from '../criar-pratos/criar-pratos.component';

@Component({
  selector: 'app-listar-pratos',
  templateUrl: './listar-pratos.component.html',
  styleUrls: ['./listar-pratos.component.css']
})
export class ListarPratosComponent {

  public listaPratos: PratosModel | any;

  constructor(
    private service: PratosSharedService,
    public dialog: MatDialog
  ){}

  ngOnInit():void{
    this.service.listaPratos().subscribe(
      res => this.listaPratos = res,
      error => error
    )
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(CriarPratosComponent);
  }

  onDelete(id: number){
    this.service.excluirPratos(id).subscribe(
      res => {
        this.listaPratos = this.listaPratos.filter()
      },
      error => error
    ), location.reload()
  }
}

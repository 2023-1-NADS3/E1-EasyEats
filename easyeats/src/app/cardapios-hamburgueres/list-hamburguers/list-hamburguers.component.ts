import { Component } from '@angular/core';
import { HamburguerModel } from '../hamb-shared/hamb-model';
import { HambService } from '../hamb-shared/hamb.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarHamburgueresComponent } from '../criar-hamburgueres/criar-hamburgueres.component';




@Component({
  selector: 'app-list-hamburguers',
  templateUrl: './list-hamburguers.component.html',
  styleUrls: ['./list-hamburguers.component.css']
})
export class ListHamburguersComponent {
/*
  elemento:HamburguerModel[] =[]

  constructor(
    private service:HambService,
    public dialog:MatDialog
  ){}

  ngOnInit():void{
    this.listarTodosHamburgueres();
  }

  listarTodosHamburgueres(): void{
    this.service.listarHamburguers().subscribe((res) => (this.elemento = res.data))
  }

  onAdd():void{
    const dialogRef = this.dialog.open(CriarHamburgueresComponent);

    dialogRef
      .afterClosed()
      .subscribe((res)=>{
        this.listarTodosHamburgueres()
      })
  }
*/
}

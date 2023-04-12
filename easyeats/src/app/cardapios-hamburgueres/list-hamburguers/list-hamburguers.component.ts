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

  public listaHamburguer: HamburguerModel | any;

  constructor(
    private service:HambService,
    public dialog:MatDialog
  ){}

  ngOnInit(): void {
    this.service.listarHamburguers().subscribe(
      res => this.listaHamburguer = res,
      error => error,
    );
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(CriarHamburgueresComponent);
    
  }

 
  onDelete(id: number){
    this.service.excluirHamburhueres(id).subscribe(
      res => {
        this.listaHamburguer = this.listaHamburguer.filter();
      },
      error => error
    ), location.reload()
  }






  
}

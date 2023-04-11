import { Component } from '@angular/core';
import { HamburguerModel } from '../hamb-shared/hamb-model';
import { HambService } from '../hamb-shared/hamb.service';



@Component({
  selector: 'app-list-hamburguers',
  templateUrl: './list-hamburguers.component.html',
  styleUrls: ['./list-hamburguers.component.css']
})
export class ListHamburguersComponent {

  elemento:HamburguerModel[] =[]

  constructor(
    private service:HambService,

  ){}

  ngOnInit():void{
    this.listarTodosHamburgueres();
  }

  listarTodosHamburgueres(): void{
    this.service.listarHamburguers().subscribe((res) => (this.elemento = res.data))
  }

}

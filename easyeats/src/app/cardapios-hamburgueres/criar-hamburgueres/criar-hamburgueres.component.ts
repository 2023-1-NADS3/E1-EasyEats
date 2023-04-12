import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HamburguerModel } from '../hamb-shared/hamb-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HambService } from '../hamb-shared/hamb.service';

@Component({
  selector: 'app-criar-hamburgueres',
  templateUrl: './criar-hamburgueres.component.html',
  styleUrls: ['./criar-hamburgueres.component.css']
})
export class CriarHamburgueresComponent {

  public form: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: HamburguerModel,
    public dialogRef: MatDialogRef<HamburguerModel>,
    public formBuilder: FormBuilder,
    public service:HambService,
  ){
    this.form = this.cadastroForm
  }

  public cadastroForm: FormGroup = this.formBuilder.group({
    id: [null],
    hamburguer: [null],
    ingrediente_1: [null],
    ingrediente_2: [null],
    ingrediente_3: [null],
    ingrediente_4: [null],
  });

  enviarHamburguer(): any {
    this.service.criarHamburguers(this.cadastroForm.value).subscribe((res)=>{
      console.log('criado')
    })

  }
}

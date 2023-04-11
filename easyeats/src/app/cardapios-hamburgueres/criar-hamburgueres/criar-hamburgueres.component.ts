import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HambService } from '../hamb-shared/hamb.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HamburguerModel } from '../hamb-shared/hamb-model';

@Component({
  selector: 'app-criar-hamburgueres',
  templateUrl: './criar-hamburgueres.component.html',
  styleUrls: ['./criar-hamburgueres.component.css']
})
export class CriarHamburgueresComponent {
  public form:FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public service:HambService,
    public formBuiler:FormBuilder,
    public dialogRef:MatDialogRef<HamburguerModel>

  ){
    this.form = this.cadastroForm;
  }

  public cadastroForm:FormGroup=this.formBuiler.group({
    name: [null],
    ingrediente_1: [null],
    ingrediente_2: [null],
    ingrediente_3: [null],
    ingrediente_4: [null],

  })

  onSubmit():any{
    this.service.criarHamburguers(this.cadastroForm.value).subscribe((res)=>{

    })
  }

  onCancel():void{
    this.dialogRef.close();
  }

}

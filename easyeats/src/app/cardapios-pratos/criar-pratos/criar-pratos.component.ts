import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PratosModel } from '../pratos-shared/pratos-model';
import { PratosSharedService } from '../pratos-shared/pratos-shared.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-pratos',
  templateUrl: './criar-pratos.component.html',
  styleUrls: ['./criar-pratos.component.css']
})
export class CriarPratosComponent {

  public form : FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PratosModel,
    public dialogRef: MatDialogRef<PratosModel>,
    public formBuilder: FormBuilder,
    public service: PratosSharedService,
  ){
    this.form = this.cadastroForm
  }

  public cadastroForm: FormGroup = this.formBuilder.group({
    id: [null],
    prato: [null],
    ingrediente_1: [null],
    ingrediente_2: [null],
    ingrediente_3: [null],
    ingrediente_4: [null],
    preco_prato: [null]
  });

  enviarPrato(): any {
    this.service.criarPratos(this.cadastroForm.value).subscribe((res)=>{
      console.log('prato criado')
    }), location.reload()
  }
}

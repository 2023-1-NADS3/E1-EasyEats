import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BebidaModel } from '../bebida-shared/bebida.model';
import { BebidaService } from '../bebida-shared/bebida.service';

@Component({
  selector: 'app-criar-bebidas',
  templateUrl: './criar-bebidas.component.html',
  styleUrls: ['./criar-bebidas.component.css']
})
export class CriarBebidasComponent {

  public form:FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: BebidaModel,
    public dialogRef: MatDialogRef<BebidaModel>,
    public formBuilder: FormBuilder,
    public service: BebidaService
  ){
    this.form = this.cadastroForm
  }

  public cadastroForm: FormGroup = this.formBuilder.group({
    id: [null],
    bebida: [null],
    preco_bebida: [null]
  })

  enviarBebida(): any{
    this.service.criarBebidas(this.cadastroForm.value).subscribe((res) => {
      console.log('bebida criada')
    }), location.reload()
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarHamburgueresComponent } from './criar-hamburgueres/criar-hamburgueres.component';

@NgModule({
  declarations: [
    CriarHamburgueresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HamburguerModule { }

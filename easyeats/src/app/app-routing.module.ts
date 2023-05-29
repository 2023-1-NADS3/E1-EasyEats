import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardapiosComponent } from './cardapios/cardapios.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListarAperitivosComponent } from './cardapios-aperitivos/listar-aperitivos/listar-aperitivos.component';
import { FritasComponent } from './fritas/fritas.component';
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { EntrarComponent } from './entrar/entrar.component';
import { FavoritosComponent } from "./favoritos/favoritos.component";
import { BurguerOneComponent } from './burguer-one/burguer-one.component';
import { BurguerTwoComponent } from "./burguer-two/burguer-two.component";
import { BurguerThreeComponent } from './burguer-three/burguer-three.component';
import { BurguerFourComponent } from './burguer-four/burguer-four.component';
import { BurguerFiveComponent } from './burguer-five/burguer-five.component';
import { CardapioHamburguerComponent } from './cardapio-hamburguer/cardapio-hamburguer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlteraDadosComponent } from './altera-dados/altera-dados.component';
import { DeletaContaComponent } from './deleta-conta/deleta-conta.component';



const routes: Routes = [

  { pathMatch: 'full', path: '', component: EntrarComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cardapio-aperitivos', component: ListarAperitivosComponent },
  { path: 'cardapio', component: CardapiosComponent },
  { path: 'porcao-de-fritas', component: FritasComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'burguerOne', component: BurguerOneComponent },
  { path: 'burguerTwo', component: BurguerTwoComponent },
  { path: 'burguerThree', component: BurguerThreeComponent },
  { path: 'burguerFour', component: BurguerFourComponent },
  { path: 'burguerFive', component: BurguerFiveComponent },
  { path: 'cardapioBurguer', component: CardapioHamburguerComponent },
  { path: 'meu-perfil', component: PerfilComponent },
  { path: 'deleta-conta', component: DeletaContaComponent },
  { path: 'altera-dados', component: AlteraDadosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

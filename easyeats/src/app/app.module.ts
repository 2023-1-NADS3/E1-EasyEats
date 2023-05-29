import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarAperitivosComponent } from './cardapios-aperitivos/listar-aperitivos/listar-aperitivos.component';
import { AperitivosModule } from './cardapios-aperitivos/aperitivos.module';
import { CardapiosComponent } from './cardapios/cardapios.component';
import { FritasComponent } from './fritas/fritas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BurguerOneComponent } from './burguer-one/burguer-one.component';
import { BurguerTwoComponent } from './burguer-two/burguer-two.component';
import { BurguerThreeComponent } from './burguer-three/burguer-three.component';
import { BurguerFourComponent } from './burguer-four/burguer-four.component';
import { BurguerFiveComponent } from './burguer-five/burguer-five.component';
import { CardapioHamburguerComponent } from './cardapio-hamburguer/cardapio-hamburguer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlteraDadosComponent } from './altera-dados/altera-dados.component';
import { DeletaContaComponent } from './deleta-conta/deleta-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    FooterComponent,
    ListarAperitivosComponent,
    CardapiosComponent,
    FritasComponent,
    CarrinhoComponent,
    EntrarComponent,
    FavoritosComponent,
    BurguerOneComponent,
    BurguerTwoComponent,
    BurguerThreeComponent,
    BurguerFourComponent,
    BurguerFiveComponent,
    CardapioHamburguerComponent,
    PerfilComponent,
    AlteraDadosComponent,
    DeletaContaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    AperitivosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

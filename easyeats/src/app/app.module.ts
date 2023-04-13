import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListHamburguersComponent } from './cardapios-hamburgueres/list-hamburguers/list-hamburguers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { HamburguerModule } from './cardapios-hamburgueres/hamburguer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarBebidasComponent } from './cardapios-bebidas/listar-bebidas/listar-bebidas.component';
import { BebidasModule } from './cardapios-bebidas/bebidas.module';
import { ListarPratosComponent } from './cardapios-pratos/listar-pratos/listar-pratos.component';
import { PratosModule } from './cardapios-pratos/pratos.module';
import { CriarAperitivosComponent } from './cardapios-aperitivos/criar-aperitivos/criar-aperitivos.component';
import { ListarAperitivosComponent } from './cardapios-aperitivos/listar-aperitivos/listar-aperitivos.component';
import { AperitivosModule } from './cardapios-aperitivos/aperitivos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    HeaderComponent,
    FooterComponent,
    ListHamburguersComponent,
    ListarBebidasComponent,
    ListarPratosComponent,
    ListarAperitivosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    HamburguerModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    BebidasModule,
    PratosModule,
    AperitivosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

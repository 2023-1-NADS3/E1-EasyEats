import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioFoodComponent } from './cardapio-food/cardapio-food.component';
import { CardapioDrinkComponent } from './cardapio-drink/cardapio-drink.component';
import { EspecificacoesFoodComponent } from './especificacoes-food/especificacoes-food.component';
import { EspecificacoesDrinkComponent } from './especificacoes-drink/especificacoes-drink.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { StatusPedidoComponent } from './status-pedido/status-pedido.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { HistoricoDePedidosComponent } from './historico-de-pedidos/historico-de-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    CardapioFoodComponent,
    CardapioDrinkComponent,
    EspecificacoesFoodComponent,
    EspecificacoesDrinkComponent,
    CarrinhoComponent,
    StatusPedidoComponent,
    ConfiguracoesComponent,
    RecuperarSenhaComponent,
    HistoricoDePedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

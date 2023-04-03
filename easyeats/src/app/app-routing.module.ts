import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioDrinkComponent } from './cardapio-drink/cardapio-drink.component';
import { CardapioFoodComponent } from './cardapio-food/cardapio-food.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { EspecificacoesDrinkComponent } from './especificacoes-drink/especificacoes-drink.component';
import { EspecificacoesFoodComponent } from './especificacoes-food/especificacoes-food.component';
import { HistoricoDePedidosComponent } from './historico-de-pedidos/historico-de-pedidos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { StatusPedidoComponent } from './status-pedido/status-pedido.component';

const routes: Routes = [
 
  { pathMatch: 'full', path: '', component: HomeComponent },
  { path: 'cardapio-food', component: CardapioFoodComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'status-pedido', component: StatusPedidoComponent },
  { path: 'recuperar', component: RecuperarSenhaComponent },
  { path: 'historico', component: HistoricoDePedidosComponent },
  { path: 'especificacoes-food', component: EspecificacoesFoodComponent },
  { path: 'especificacoes-drink', component: EspecificacoesDrinkComponent },
  { path: 'cardapio-drink', component: CardapioDrinkComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

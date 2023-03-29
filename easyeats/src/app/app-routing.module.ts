import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioFoodComponent } from './cardapio-food/cardapio-food.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cardapio-food', component: CardapioFoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

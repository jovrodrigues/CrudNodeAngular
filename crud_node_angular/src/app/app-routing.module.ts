import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { ProdutoGrupoComponent } from './view/produto-grupo/produto-grupo.component';
import { ProdutoMarcaComponent } from './view/produto-marca/produto-marca.component';
import { ProdutoSubgrupoComponent } from './view/produto-subgrupo/produto-subgrupo.component';
import { ProdutoUnidadeComponent } from './view/produto-unidade/produto-unidade.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'produto-grupo', component: ProdutoGrupoComponent},
  { path: 'produto-subgrupo', component: ProdutoSubgrupoComponent},
  { path: 'produto-marca', component: ProdutoMarcaComponent},
  { path: 'produto-unidade', component: ProdutoUnidadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { ProdutoGrupoComponent } from './view/produto-grupo/produto-grupo.component';
import { ProdutoMarcaComponent } from './view/produto-marca/produto-marca.component';
import { ProdutoSubgrupoComponent } from './view/produto-subgrupo/produto-subgrupo.component';
import { ProdutoUnidadeComponent } from './view/produto-unidade/produto-unidade.component';
import { SubgrupoInserirComponent } from './view/subgrupo-inserir/subgrupo-inserir.component';
import { GrupoInserirComponent } from './view/grupo-inserir/grupo-inserir.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'produto-grupo', component: ProdutoGrupoComponent},
  { path: 'produto-subgrupo', component: ProdutoSubgrupoComponent},
  { path: 'produto-marca', component: ProdutoMarcaComponent},
  { path: 'produto-unidade', component: ProdutoUnidadeComponent},
  { path: 'subgrupo-inserir', component: SubgrupoInserirComponent},
  { path: 'grupo-inserir', component: GrupoInserirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

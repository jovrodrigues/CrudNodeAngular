import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { ProdutoGrupoComponent } from './view/produto-grupo/produto-grupo.component';
import { ProdutoMarcaComponent } from './view/produto-marca/produto-marca.component';
import { ProdutoSubgrupoComponent } from './view/produto-subgrupo/produto-subgrupo.component';
import { ProdutoUnidadeComponent } from './view/produto-unidade/produto-unidade.component';
import { SubgrupoInserirComponent } from './view/subgrupo-inserir/subgrupo-inserir.component';
import { MarcaInserirComponent } from './view/marca-inserir/marca-inserir.component';
import { GrupoInserirComponent } from './view/grupo-inserir/grupo-inserir.component';
import { GrupoEditarComponent } from './view/grupo-editar/grupo-editar.component';
import { SubgrupoEditarComponent } from './view/subgrupo-editar/subgrupo-editar.component';
import { MarcaEditarComponent } from './view/marca-editar/marca-editar.component';


const routes: Routes = [

  { path: '', component: DashboardComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'produto-grupo', component: ProdutoGrupoComponent},
  { path: 'produto-subgrupo', component: ProdutoSubgrupoComponent},
  { path: 'produto-marca', component: ProdutoMarcaComponent},
  { path: 'produto-unidade', component: ProdutoUnidadeComponent},
  { path: 'subgrupo-inserir', component: SubgrupoInserirComponent},
  { path: 'marca-inserir', component: MarcaInserirComponent},
  { path: 'grupo-inserir', component: GrupoInserirComponent},
  { path: 'grupo-editar', component: GrupoEditarComponent},
  { path: 'subgrupo-editar', component: SubgrupoEditarComponent},
  { path: 'marca-editar', component: MarcaEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

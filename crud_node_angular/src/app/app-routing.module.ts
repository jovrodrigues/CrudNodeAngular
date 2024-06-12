import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoSubgrupoComponent } from './view/produto-subgrupo/produto-subgrupo.component';

const routes: Routes = [
  { 'path' : 'subgrupo',
    'component' : ProdutoSubgrupoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

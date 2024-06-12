import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './view/footer/footer.component';
import { NavLateralComponent } from './view/nav-lateral/nav-lateral.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProdutoGrupoComponent } from './view/produto-grupo/produto-grupo.component';
import { ProdutoSubgrupoComponent } from './view/produto-subgrupo/produto-subgrupo.component';
import { ProdutoMarcaComponent } from './view/produto-marca/produto-marca.component';
import { ProdutoUnidadeComponent } from './view/produto-unidade/produto-unidade.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavLateralComponent,
    DashboardComponent,
    ProdutoGrupoComponent,
    ProdutoSubgrupoComponent,
    ProdutoMarcaComponent,
    ProdutoUnidadeComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

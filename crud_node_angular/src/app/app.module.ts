import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './view/footer/footer.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProdutoGrupoComponent } from './view/produto-grupo/produto-grupo.component';
import { ProdutoSubgrupoComponent } from './view/produto-subgrupo/produto-subgrupo.component';
import { ProdutoMarcaComponent } from './view/produto-marca/produto-marca.component';
import { ProdutoUnidadeComponent } from './view/produto-unidade/produto-unidade.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { HeaderComponent } from './view/header/header.component';
import { SubgrupoInserirComponent } from './view/subgrupo-inserir/subgrupo-inserir.component';
import { GrupoInserirComponent } from './view/grupo-inserir/grupo-inserir.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { MarcaInserirComponent } from './view/marca-inserir/marca-inserir.component';
import { GrupoEditarComponent } from './view/grupo-editar/grupo-editar.component';
import { SubgrupoEditarComponent } from './view/subgrupo-editar/subgrupo-editar.component';
import { MarcaEditarComponent } from './view/marca-editar/marca-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    ProdutoGrupoComponent,
    ProdutoSubgrupoComponent,
    ProdutoMarcaComponent,
    ProdutoUnidadeComponent,
    ProdutoComponent,
    HeaderComponent,
    SubgrupoInserirComponent,
    GrupoInserirComponent,
    NavbarComponent,
    MarcaInserirComponent,
    GrupoEditarComponent,
    SubgrupoEditarComponent,
    MarcaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {
  id: string = '';
  id_produto_subgrupo: string = '';
  id_produto_marca: string = '';
  id_produto_unidade: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.id_produto_subgrupo = params['id_produto_subgrupo'];
      this.id_produto_marca = params['id_produto_marca'];
      this.id_produto_unidade = params['id_produto_unidade'];
    });
  }

  editarElemento() {
    let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
    let gtln = document.getElementById("input-gtln") as HTMLInputElement;
    let valor = document.getElementById("input-valor") as HTMLInputElement;
    let data_cadastro = document.getElementById("input-data_cadastro") as HTMLInputElement;
    if (nomeNovo && gtln && valor && data_cadastro) {
      let produtoNovo = { 'nome': nomeNovo.value,'valor': valor.value, 'gtln': gtln.value, 'id_produto_subgrupo' : this.id_produto_subgrupo, 'id_produto_marca' : this.id_produto_marca, 'id_produto_unidade' :  this.id_produto_unidade, 'data_cadastro': data_cadastro.value};
      this.apiService.putProdutos(this.id, produtoNovo).subscribe(error => {
        console.error("Não foi possível editar.", error);
      });
    }
  }
}

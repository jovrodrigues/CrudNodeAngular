import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/controller/api.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto-inserir',
  templateUrl: './produto-inserir.component.html',
  styleUrls: ['./produto-inserir.component.css']
})
export class ProdutoInserirComponent {
    constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
    inserirElemento() {
      let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
      let gtln = document.getElementById("input-gtln") as HTMLInputElement;
      let valor = document.getElementById("input-valor") as HTMLInputElement;
      let data_cadastro = document.getElementById("input-data_cadastro") as HTMLInputElement;
      if (nomeNovo && gtln && valor && data_cadastro) {
        let produtoNovo = { 'nome': nomeNovo.value,'valor': valor.value, 'gtln': gtln.value, 'id_produto_subgrupo' : 1, 'id_produto_marca' : 1, 'id_produto_unidade' :  1, 'data_cadastro': data_cadastro.value};
        this.apiService.postProdutos(produtoNovo).subscribe(error => {
          console.error("Não foi possível inserir.", error);
        });
      }
    }

}
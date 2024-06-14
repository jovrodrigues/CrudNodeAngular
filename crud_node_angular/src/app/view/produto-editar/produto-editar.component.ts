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
  id_produto_grupo: string = '';
  id_produto_marca: string = '';
  id_produto_unidade: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.id_produto_grupo = params['id_produto_grupo'];
      this.id_produto_marca = params['id_produto_marca'];
      this.id_produto_unidade = params['id_produto_unidade'];
    });
  }

  editarElemento() {
    let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
    const descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
    if (nomeNovo && descricaoNova) {
      let produtoNovo = { 'nome': nomeNovo.value, 'descricao': descricaoNova.value, 'id_produto_grupo' :  this.id_produto_grupo, 'id_produto_marca' :  this.id_produto_marca, 'id_produto_unidade' :  this.id_produto_unidade};
      this.apiService.putProdutos(this.id, produtoNovo).subscribe(error => {
        console.error("Não foi possível editar.", error);
      });
    }
  }
}

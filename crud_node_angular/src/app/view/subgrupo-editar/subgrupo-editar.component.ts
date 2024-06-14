import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subgrupo-editar',
  templateUrl: './subgrupo-editar.component.html',
  styleUrls: ['./subgrupo-editar.component.css']
})
export class SubgrupoEditarComponent implements OnInit {
  id: string = '';
  id_produto_grupo: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.id_produto_grupo = params['id_produto_grupo'];
    });
  }

  editarElemento() {
    console.log("oi");
    let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
    const descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
    if (nomeNovo && descricaoNova) {
      let subgrupoNovo = { 'nome': nomeNovo.value, 'descricao': descricaoNova.value, 'id_produto_grupo' :  this.id_produto_grupo};
      this.apiService.putSubgrupo(this.id, subgrupoNovo).subscribe(error => {
        console.error("Não foi possível excluir.", error);
      });
    }
  }
}

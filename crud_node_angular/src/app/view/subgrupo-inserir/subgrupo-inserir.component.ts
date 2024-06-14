import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/controller/api.service';
import { Subgrupo } from 'src/app/model/subgrupo';

@Component({
  selector: 'app-subgrupo-inserir',
  templateUrl: './subgrupo-inserir.component.html',
  styleUrls: ['./subgrupo-inserir.component.css']
})
export class SubgrupoInserirComponent {
    constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
    inserirElemento() {
      let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
      let descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
      if (nomeNovo && descricaoNova) {
        let subgrupoNovo = { 'nome': nomeNovo.value, 'descricao': descricaoNova.value, 'id_produto_grupo' :  1};
        this.apiService.postSubgrupo(subgrupoNovo).subscribe(error => {
          console.error("Não foi possível inserir.", error);
        });
      }
    }

}
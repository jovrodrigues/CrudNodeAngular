import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/controller/api.service';


@Component({
  selector: 'app-unidade-inserir',
  templateUrl: './unidade-inserir.component.html',
  styleUrls: ['../subgrupo-inserir/subgrupo-inserir.component.css']
})
export class UnidadeInserirComponent {
  
    constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
    inserirElemento() {
      let siglaNova = document.getElementById("input-sigla") as HTMLInputElement;
      let descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
      if (siglaNova && descricaoNova) {
        let unidadeNova = { 'sigla': siglaNova.value, 'descricao': descricaoNova.value };
        this.apiService.postUnidades(unidadeNova).subscribe(error => {
          console.error("Não foi possível inserir.", error);
        });
      }
    }

}

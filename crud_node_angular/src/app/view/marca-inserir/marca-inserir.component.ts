import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/controller/api.service';

@Component({
  selector: 'app-marca-inserir',
  templateUrl: './marca-inserir.component.html',
  styleUrls: ['../subgrupo-inserir/subgrupo-inserir.component.css']
})
export class MarcaInserirComponent {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
  inserirElemento() {
    let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
    let descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
    if (nomeNovo && descricaoNova) {
      let marcaNova = { 'nome': nomeNovo.value, 'descricao': descricaoNova.value};
      this.apiService.postMarca(marcaNova).subscribe(error => {
        console.error("Não foi possível inserir.", error);
      });
    }
  }

}


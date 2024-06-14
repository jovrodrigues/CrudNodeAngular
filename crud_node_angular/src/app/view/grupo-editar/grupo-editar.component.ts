import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupo-editar',
  templateUrl: './grupo-editar.component.html',
  styleUrls: ['./grupo-editar.component.css']
})
export class GrupoEditarComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  editarElemento() {
    let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
    const descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
    if (nomeNovo && descricaoNova) {
      let grupoNovo = { 'nome': nomeNovo.value, 'descricao': descricaoNova.value};
      this.apiService.putGrupo(this.id, grupoNovo).subscribe(error => {
        console.error("Não foi possível editar.", error);
      });
    }
  }
}

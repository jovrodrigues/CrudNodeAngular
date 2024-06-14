import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marca-editar',
  templateUrl: './marca-editar.component.html',
  styleUrls: ['./marca-editar.component.css']
})
export class MarcaEditarComponent implements OnInit {
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
      let marcaNovo = { 'nome': nomeNovo.value, 'descricao': descricaoNova.value};
      this.apiService.putMarca(this.id, marcaNovo).subscribe(error => {
        console.error("Não foi possível editar.", error);
      });
    }
  }
}

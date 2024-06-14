import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/controller/api.service';

@Component({
  selector: 'app-unidade-editar',
  templateUrl: './unidade-editar.component.html',
  styleUrls: ['../subgrupo-editar/subgrupo-editar.component.css']
})
export class UnidadeEditarComponent {
  id: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  editarElemento() {
    let siglaNova = document.getElementById("input-sigla") as HTMLInputElement;
    const descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
    if (siglaNova && descricaoNova) {
      let unidadeNova = { 'sigla': siglaNova.value, 'descricao': descricaoNova.value};
      this.apiService.putUnidades(this.id, unidadeNova).subscribe(error => {
        console.error("Não foi possível editar.", error);
      });
    }
  }
}

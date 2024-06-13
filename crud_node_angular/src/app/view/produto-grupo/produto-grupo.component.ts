import { Component } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { Grupo } from 'src/app/model/grupo';

@Component({
  selector: 'app-produto-grupo',
  templateUrl: './produto-grupo.component.html',
  styleUrls: ['./produto-grupo.component.css']
  
})
export class ProdutoGrupoComponent {

  dados: any;
  objetosUnidade : Grupo[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
 
  ngOnInit():void { this.apiService.getGrupo().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosUnidade.push(element);
        });
      });
  }
}

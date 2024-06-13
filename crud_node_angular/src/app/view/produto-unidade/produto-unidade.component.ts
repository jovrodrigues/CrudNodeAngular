import { Component } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { Unidade } from 'src/app/model/unidade';

@Component({
  selector: 'app-produto-unidade',
  templateUrl: './produto-unidade.component.html',
  styleUrls: ['./produto-unidade.component.css']
})
export class ProdutoUnidadeComponent {

  dados: any;
  objetosUnidade : Unidade[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
 
  ngOnInit():void { this.apiService.getUnidades().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosUnidade.push(element);
        });
      });
  }
}

import { Component } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  dados: any;
  objetosUnidade : Produto[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
 
  ngOnInit():void { this.apiService.getProdutos().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosUnidade.push(element);
        });
      });
  }

  
}

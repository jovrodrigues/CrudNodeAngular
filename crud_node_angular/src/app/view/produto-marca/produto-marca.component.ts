import { Component } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { Marca } from 'src/app/model/marca';

@Component({
  selector: 'app-produto-marca',
  templateUrl: './produto-marca.component.html',
  styleUrls: ['./produto-marca.component.css']
})
export class ProdutoMarcaComponent {
  
  dados: any;
  objetosUnidade : Marca[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
 
  ngOnInit():void { this.apiService.getMarca().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosUnidade.push(element);
        });
      });
  }

  modalOpen(): void {
    const modal = document.getElementById("modal") as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  }
  
  modalClose(): void {
    const modal = document.getElementById("modal") as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    }
  }
}

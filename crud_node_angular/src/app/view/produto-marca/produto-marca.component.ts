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
  objetosMarca : Marca[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
 
  ngOnInit():void { this.apiService.getMarca().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosMarca.push(element);
        });
      });
  }

  modalOpen(id : any): void {
    const modal = document.getElementById("modal") as HTMLDialogElement | null;

    if (modal) {
      let botao_sim = document.getElementById("botao_sim");
      botao_sim?.addEventListener('click', () => {
        this.apiService.deleteMarca(id).subscribe(error => {
          console.error("Não foi possível excluir.", error);
        });
        this.modalClose();
        this.recarregarPagina();
      });
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

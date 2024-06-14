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
  objetosProdutos : Produto[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
 
  ngOnInit():void { this.apiService.getProdutos().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosProdutos.push(element);
        });
      });
  }

  modalOpen(id : any): void {
    const modal = document.getElementById("modal") as HTMLDialogElement | null;

    if (modal) {
      let botao_sim = document.getElementById("botao_sim");
      botao_sim?.addEventListener('click', () => {
        this.apiService.deleteProdutos(id).subscribe(error => {
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

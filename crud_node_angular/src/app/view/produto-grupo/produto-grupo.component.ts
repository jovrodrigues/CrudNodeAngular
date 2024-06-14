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

  objetosGrupo : Grupo[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
  ngOnInit():void { this.apiService.getGrupo().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosGrupo.push(element);
          console.log(element);
        });
      });
  }

  modalOpen(id : any): void {
    const modal = document.getElementById("modal") as HTMLDialogElement | null;

    if (modal) {
      let botao_sim = document.getElementById("botao_sim");
      botao_sim?.addEventListener('click', () => {
        this.apiService.deleteGrupo(id).subscribe(error => {
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
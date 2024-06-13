import { Component } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { Subgrupo } from 'src/app/model/subgrupo';

@Component({
  selector: 'app-produto-subgrupo',
  templateUrl: './produto-subgrupo.component.html',
  styleUrls: ['./produto-subgrupo.component.css']
})
export class ProdutoSubgrupoComponent {

  dados: any;
  objetosSubgrupo : Subgrupo[] = [];
 
  constructor(private apiService: ApiService) { }

  recarregarPagina() {   
    document.location.reload(); 
  }
  ngOnInit():void { this.apiService.getSubgrupo().subscribe(
      (data) => {
        data.forEach(element => {
          this.objetosSubgrupo.push(element);
          console.log(element);
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

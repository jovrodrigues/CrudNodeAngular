import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-subgrupo',
  templateUrl: './produto-subgrupo.component.html',
  styleUrls: ['./produto-subgrupo.component.css']
})
export class ProdutoSubgrupoComponent {
  constructor() {}

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

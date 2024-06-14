import { Component } from '@angular/core';

@Component({
  selector: 'app-subgrupo-inserir',
  templateUrl: './subgrupo-inserir.component.html',
  styleUrls: ['./subgrupo-inserir.component.css']
})
export class SubgrupoInserirComponent {
//     id: string = '';
//     id_produto_grupo: string = '';
  
//     constructor(private route: ActivatedRoute, private apiService: ApiService) { }
    
//     ngOnInit(): void {
//       this.route.queryParams.subscribe(params => {
//         this.id = params['id'];
//         this.id_produto_grupo = params['id_produto_grupo'];
//       });
//     }
  
//     editarElemento() {
//       console.log("oi");
//       let nomeNovo = document.getElementById("input-nome") as HTMLInputElement;
//       const descricaoNova = document.getElementById("input-descricao") as HTMLInputElement;
//       if (nomeNovo && descricaoNova) {
//         let subgrupoNovo = { 'nome': nomeNovo.value, 'descricao': descricaoNova.value, 'id_produto_grupo' :  this.id_produto_grupo};
//         this.apiService.putSubgrupo(this.id, subgrupoNovo).subscribe(error => {
//           console.error("Não foi possível excluir.", error);
//         });
//       }
// }

}
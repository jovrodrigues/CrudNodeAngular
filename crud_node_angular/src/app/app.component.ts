import { Component } from '@angular/core';
import { ApiService } from './controller/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud_node_angular';
  dados: any;

  constructor(private apiService: ApiService) { } 

  ngOnInit():void { this.apiService.getDados().subscribe(
      (data:any) => {
        this.dados = data; console.
          log
          (this.dados);
      });
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itens: string[] = ['Item 1', 'Item 2', 'Item 3'];
  title = 'crud_node_angular';
}

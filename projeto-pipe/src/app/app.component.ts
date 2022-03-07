import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'Luiz Eduardo';
  dataAniversario = new Date(1990, 3, 19);
  preco = 12855.32;
  troco = 0.57392;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  funcionarios:any = [];

  aoAdicionar(funcionario:any) {
    this.funcionarios.push(funcionario);
  }

}

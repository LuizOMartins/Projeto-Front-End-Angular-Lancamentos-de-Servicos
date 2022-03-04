import { LancamentosService } from './../services/productservice';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Lancamentos } from './../domain/lancamentos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  lancamentos: Lancamentos[];
  faPencil = faPencil;
  faTrash = faTrash;

  constructor(private lancamentosService: LancamentosService) { }

  ngOnInit(): void {
    this.lancamentosService.getLancamentos().then(data => this.lancamentos = data);
  }

}

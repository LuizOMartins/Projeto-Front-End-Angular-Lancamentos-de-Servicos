import { LancamentosService } from '../services/productservice';
import { Lancamentos } from '../domain/lancamentos';
import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
  providers: [LancamentosService]
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos: Lancamentos[];
  faPencil = faPencil;
  faTrash = faTrash;

  constructor(private lancamentosService: LancamentosService) { }

  ngOnInit(): void {
    this.lancamentosService.getLancamentos().then(data => this.lancamentos = data);
  }

}

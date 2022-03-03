import { Lancamentos } from './domain/lancamentos';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LancamentosService } from './services/productservice';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService,MessageService,LancamentosService]
})
export class AppComponent implements OnInit {

    lancamentos: Lancamentos[];
    faPencil = faPencil;
    faTrash = faTrash;
    constructor(private lancamentosService: LancamentosService) { }

    ngOnInit() {
        this.lancamentosService.getLancamentos().then(data => this.lancamentos = data);
    }
}

import { Lancamentos } from './../domain/lancamentos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LancamentosService {


    constructor(private http: HttpClient) { }

    getLancamentos() {
        return this.http.get<any>('assets/data/lancamentos.json')
        .toPromise()
        .then(res => <Lancamentos[]>res.data)
        .then(data => { return data; });
    }
}
import { Injectable } from '@angular/core';
import { Http , Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ExpenseAddService{

    constructor(private _http: Http){
    }

    addExpense(data){
        let header : Headers = new Headers({'Content-Type':'application/json'});
        let options : RequestOptions = new RequestOptions({'headers': header});

        return this._http.post('http://127.0.0.1:8000/expenses/', JSON.stringify(data),options)
                                .map(res => res.json());
    }

}

import { Injectable } from '@angular/core';
import { Http , Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ExpenseListService{

    constructor(private _http: Http){}

    getExpenses(){
        let header : Headers = new Headers({'Content-Type':'application/json'});
        return this._http.get('http://127.0.0.1:8000/expenses/',header)
                .map(res => res.json());
    }

    deleteExpense(eid){
        let header : Headers = new Headers({'Content-Type':'application/json'});
        return this._http.delete('http://127.0.0.1:8000/expenses/'+eid+'/',header)
                .map(res => res.json())
                .catch(err => {
                                return err.json()
                            });
    }

}

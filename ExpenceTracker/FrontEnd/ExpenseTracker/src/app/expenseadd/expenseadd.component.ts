import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import {ExpenseAddService} from './expenseadd.service';

@Component({
  selector: 'app-expenseadd',
  templateUrl: './expenseadd.component.html',
  styleUrls: ['./expenseadd.component.css'],
  providers: [ExpenseAddService]
})
export class ExpenseaddComponent implements OnInit, OnDestroy {

  expenseForm : FormGroup;
  expenseCreateSub : any;

  constructor(private _expenseadd : ExpenseAddService,
              private _formBuilder : FormBuilder) { }

  ngOnInit() {

      this.initilizeForm();
  }

  ngOnDestroy(){
      this.expenseCreateSub.unsubscribe();
  }

  initilizeForm(){
    this.expenseForm = this._formBuilder.group({
        name :['',[Validators.required,Validators.minLength(6)]],
        cost : ['',[Validators.required,Validators.minLength(6)]],
        purchaseDate : ['',[Validators.required]]
    });
  }

  addExpense(){
         let data = this.expenseForm.value;
         let expensedetails = {
             "name" : data.name,
             "cost" : data.cost,
             "purchased_date" : data.purchaseDate
         };

         this.expenseCreateSub = this._expenseadd.addExpense(expensedetails)
                                     .subscribe(res => {
                                            console.log("Expense Added");
                                            this.expenseForm.reset();
                                     },
                                     err => {
                                         console.log("Problem Adding Expense");
                                     });

  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import  {ExpenseListService} from './expenselist.service';


@Component({
  selector: 'app-expenselist',
  templateUrl: './expenselist.component.html',
  styleUrls: ['./expenselist.component.css'],
  providers: [ExpenseListService],
})

export class ExpenselistComponent implements OnInit, OnDestroy {

  public expenses;
  public expensesSub : any;
  public expenseDelSub : any;
  public timerSubscription: any;

  constructor(private _expenseListService : ExpenseListService) { }

  getExpenses(){
      this.expensesSub = this._expenseListService.getExpenses()
                                  .subscribe(res => {
                                      this.expenses = res;
                                  },
                                  err => {
                                      console.log("Problem Fetching Data...");
                                  });
  }

  deleteExpense(id){
      this.expenseDelSub = this._expenseListService.deleteExpense(id)
                                .subscribe(res => {
                                    console.log("Expense Deleted");
                                },
                                err => {
                                    console.log("Problem Deleting Expense");
                                });
  }

  subscribeToData(){
    this.timerSubscription = Observable.interval(3000)
                          .subscribe(res => {
                               this.getExpenses();
                           });
  }

  ngOnInit() {
      this.subscribeToData();

  }

  ngOnDestroy(){
      this.expensesSub.unsubscribe();
      this.expenseDelSub.unsubscribe();
      this.timerSubscription.unsubscribe();
  }



}

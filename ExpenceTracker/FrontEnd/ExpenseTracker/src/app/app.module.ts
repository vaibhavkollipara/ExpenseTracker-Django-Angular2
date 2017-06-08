import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpenselistComponent } from './expenselist/expenselist.component';
import { ExpenseaddComponent } from './expenseadd/expenseadd.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenselistComponent,
    ExpenseaddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

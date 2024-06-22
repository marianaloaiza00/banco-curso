import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';

@NgModule({
  declarations: [
    AccountsComponent,
    HomeComponent,
    ProfileComponent,
    TransactionsComponent,
    CreateTransactionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ]
})
export class DashboardModule { }


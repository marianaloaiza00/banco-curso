import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../core/service/transaction.service';
import { Transaction } from '../../shared/models/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private router: Router) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe({
      next: transactions => this.transactions = transactions,
      error: err => console.error(err)
    });
  }
}

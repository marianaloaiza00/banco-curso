import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from '../../core/service/transaction.service';
import { Transaction } from '../../shared/models/transaction.model';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent {
  createTransactionForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private router: Router
  ) {
    this.createTransactionForm = this.fb.group({
      type: ['', Validators.required],
      source: ['', Validators.required],
      destination: [''],
      amount: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createTransaction() {
    if (this.createTransactionForm.valid) {
      const newTransaction: Transaction = this.createTransactionForm.value;
      this.transactionService.newTransaction(newTransaction).subscribe({
        next: () => {
          this.message = 'Transacción realizada con éxito';
          this.createTransactionForm.reset();
        },
        error: (err) => {
          console.error('Error en la transacción', err);
          this.message = 'Error en la transacción.';
        }
      });
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goTransactions() {
    this.router.navigate(['/transactions']);
  }
}

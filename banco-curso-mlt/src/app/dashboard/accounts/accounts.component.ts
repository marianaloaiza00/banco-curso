import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  name: string = '';
  accounts: string[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      (data: any) => {
        this.name = data.firstName;
        this.accounts = data.accounts;
      },
      (error) => {
        console.error('Intentalo de nuevo', error);
      }
    );
  }

  goTransactions() {
    this.router.navigate(['/create-transaction']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}

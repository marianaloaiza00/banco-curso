import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe({
      next: profile => this.profile = profile,
      error: err => {
        console.error(err);
        if (err.status === 500) {
          this.logout();
        }
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}

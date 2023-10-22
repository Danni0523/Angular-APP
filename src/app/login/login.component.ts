import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const profileString = localStorage.getItem('profile');

    if (profileString) {
      const profile = JSON.parse(profileString);

      if (
        profile.username === this.username &&
        profile.password === this.password
      ) {
        // Redirect to main page if login is correct
        this.router.navigate(['']); // Navigate to the root/main page
      } else {
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    } else {
      this.errorMessage = 'User profile not found. Please sign up.';
    }
  }
}

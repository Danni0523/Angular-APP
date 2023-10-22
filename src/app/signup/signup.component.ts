import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    const profile = {
      username: this.username,
      password: this.password,
      logs: [], // Initialize an empty array for logs
    };

    // Save the profile to local storage
    localStorage.setItem('profile', JSON.stringify(profile));
  }
}

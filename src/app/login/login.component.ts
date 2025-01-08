import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Initialization logic here
    console.log('LoginComponent initialized');
  }

  async onSubmit() {
    const loginData = { username: this.username, password: this.password };
    console.log('Login Data:', loginData);
    try {
      const response = await this.authService.login(loginData);
      console.log('Login successful', response);
      this.successMessage = 'Login successful';
      this.errorMessage = '';
    } catch (error: any) {
      console.error('Login failed', error);
      this.errorMessage = 'Login failed: ' + (error.message || 'Unknown error');
      this.successMessage = '';
    }
  }
}

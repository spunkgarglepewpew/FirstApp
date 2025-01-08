import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  mobile: string = '';
  address: string = '';
  gender: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      this.successMessage = '';
      return;
    }

    const signupData = {
      username: this.username,
      email: this.email,
      password: this.password,
      mobile: this.mobile,
      address: this.address,
      gender: this.gender
    };
    console.log('Signup Data:', signupData);
    try {
      const response = await this.authService.signup(signupData);
      console.log('Signup successful', response);
      this.successMessage = 'Signup successful';
      this.errorMessage = '';
      form.resetForm();
    } catch (error: any) {
      console.error('Signup failed', error);
      this.errorMessage = 'Signup failed: ' + (error.response?.data?.message || error.message || 'Unknown error');
      this.successMessage = '';
    }
  }
}
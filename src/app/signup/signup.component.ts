import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
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

  constructor(private authService: AuthService) {}

  async onSubmit() {
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
    } catch (error) {
      console.error('Signup failed', error);
    }
  }
}

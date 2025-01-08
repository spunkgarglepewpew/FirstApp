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
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  async onSubmit() {
    const signupData = { email: this.email, password: this.password, confirmPassword: this.confirmPassword };
    console.log('Signup Data:', signupData);
    await this.authService.signup(signupData);
  }
}

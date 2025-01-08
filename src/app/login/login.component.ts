import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async onSubmit() {
    const loginData = { username: this.username, password: this.password };
    console.log('Login Data:', loginData);
    try {
      const response = await this.authService.login(loginData);
      console.log('Login successful', response);
      
    } catch (error) {
      console.error('Login failed', error);
      
    }
  }
}

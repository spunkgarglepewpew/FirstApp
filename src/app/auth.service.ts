import { Injectable } from '@angular/core';

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  async login(request: LoginRequest): Promise<any> {
    try {
      const response = { data: { message: 'Login successful', user: { email: request.email } } };
      console.log('Login successful', response.data);
      return response.data;
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  
  async signup(request: SignupRequest): Promise<any> {
    try {
      const response = { data: { message: 'Signup successful', user: { email: request.email } } };
      console.log('Signup successful', response.data);
      return response.data;
    } catch (error) {
      console.error('Signup failed', error);
    }
  }
}

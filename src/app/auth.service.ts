import { Injectable } from '@angular/core';
import axios from 'axios';  

interface LoginRequest {
  username: string;
  password: string;
}

interface SignupRequest {
  username: string;
  email: string;
  password: string;
  mobile: string;
  address: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';  

  constructor() { }

  async login(credentials: LoginRequest): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/signin`, credentials, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Login Successful:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Login Error:', error);
      throw error;
    }
  }

  async signup(user: SignupRequest): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/signup`, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Signup Successful:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Signup Error:', error);
      throw error;
    }
  }
}

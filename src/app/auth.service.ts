import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() { }

  login(): void {
    // Implement login logic (e.g., store token in localStorage)
    this.isLoggedIn = true;
  }

  logout(): void {
    // Implement logout logic (e.g., remove token from localStorage)
    this.isLoggedIn = false;
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}

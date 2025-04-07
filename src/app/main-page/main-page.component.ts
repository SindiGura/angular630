import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // If you have an AuthService to manage login

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn(); // Check if user is logged in
  }

  logout(): void {
    this.authService.logout(); // Call logout function from your AuthService
    this.isUserLoggedIn = false; // Update the login status
  }
}

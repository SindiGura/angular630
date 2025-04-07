import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Ensure your AuthService is imported

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn(); // Assuming AuthService has this method
  }
}

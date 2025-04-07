import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

declare const google: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  cartCount = 0;
  branches: any[] = [];
  userAddress = '';
  selectedBranch = '';
  distanceKm = '';
  userId = '123'; // replace this with actual session data if needed

  directionsService: any;
  directionsRenderer: any;
  map: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
    this.fetchBranches();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.loadCart();
  }

  fetchBranches() {
    // Simulate backend fetch. Replace with HTTP call.
    this.branches = [
      { name: 'Downtown Branch', address: '123 King St W, Toronto, ON' },
      { name: 'Uptown Branch', address: '456 Yonge St, Toronto, ON' }
    ];
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: { lat: 43.6532, lng: -79.3832 }
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);
  }

  calculateRoute(): void {
    if (!this.selectedBranch || !this.userAddress) {
      alert('Please select a branch and enter your address.');
      return;
    }

    const request = {
      origin: this.selectedBranch,
      destination: this.userAddress,
      travelMode: 'DRIVING'
    };

    this.directionsService.route(request, (result: any, status: string) => {
      if (status === 'OK') {
        this.directionsRenderer.setDirections(result);
        const distance = result.routes[0].legs[0].distance.value / 1000;
        this.distanceKm = distance.toFixed(2);
      } else {
        alert('Could not calculate route: ' + status);
      }
    });
  }

  saveTrip(): void {
    const price = (parseFloat(this.distanceKm) * 1.5).toFixed(2);

    const trip = {
      source: this.selectedBranch,
      destination: this.userAddress,
      distance: this.distanceKm,
      price,
      user_id: this.userId
    };

    // Send this to backend (placeholder)
    console.log('Saving trip:', trip);
    alert('Trip saved! Redirecting to payment...');
    // Use Router to navigate to payments
  }
}

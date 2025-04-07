import { Component, OnInit } from '@angular/core';

declare var google: any; // Declare google globally

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadGoogleMaps();
  }

  loadGoogleMaps(): void {
    // Dynamically load Google Maps API if not already available
    if (typeof google === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places';
      script.async = true;
      script.onload = () => this.initMap();
      document.body.appendChild(script);
    } else {
      this.initMap();
    }
  }

  initMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 43.7, lng: -79.4 },  // Default coordinates
      zoom: 10
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
  }

  calculateRoute(): void {
    const selectedBranch = (document.getElementById('branch') as HTMLSelectElement).value.split(',');
    const customerAddress = (document.getElementById('customerAddress') as HTMLInputElement).value;

    if (!customerAddress) {
      alert("Please enter a delivery address.");
      return;
    }

    const origin = new google.maps.LatLng(parseFloat(selectedBranch[0]), parseFloat(selectedBranch[1]));

    const request = {
      origin: origin,
      destination: customerAddress,
      travelMode: 'DRIVING'
    };

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    // Provide types for result and status
    directionsService.route(request, (result: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      } else {
        alert('Error: ' + status);
      }
    });
  }

  proceedToCheckout(): void {
    // Navigate to checkout page
    window.location.href = '/checkout';
  }
}

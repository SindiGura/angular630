import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'; // Import your components
import { AboutComponent } from './about/about.component'; // Add routes as needed
import { DeliveryComponent } from './delivery/delivery.component'; 
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'delivery', component: DeliveryComponent }
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'cart', pathMatch: 'full' }
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Define your routes here
  exports: [RouterModule] // Export RouterModule so it's available in the app
})
export class AppRoutingModule { }

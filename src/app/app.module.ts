import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule, which includes CommonModule
import { AppComponent } from './app.component'; // Import your root component
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { AppRoutingModule } from './app-routing.module'; // If you are using a separate routing module for your routes
import { MainPageComponent } from './main-page/main-page.component'; // Import your main page component
import { AboutComponent } from './about/about.component'; // Import other components if necessary
import { AgmCoreModule } from '@agm/core';  // Import AgmCoreModule
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent, // Declare your root component here
    MainPageComponent, // Declare other components like MainPageComponent
    AboutComponent,
    CartComponent // Add additional components
  ],
  imports: [
    BrowserModule, // Import BrowserModule for Angular to work in the browser
    AppRoutingModule, // Import your routing module if you have one
    RouterModule, // Import RouterModule to enable routing
    AgmCoreModule.forRoot({
        apiKey: "AIzaSyClYvSlHYsrJgaOdeDeSuRtM6ECjyu6qwk&libraries"})
  
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the main app component
})
export class AppModule { }

import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

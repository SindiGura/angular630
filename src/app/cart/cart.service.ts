import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  getCart(): any[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeItem(index: number): void {
    const cart = this.getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

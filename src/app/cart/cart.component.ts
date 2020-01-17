import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart-service/cart.service';
import { CookieService } from '../cookie-service/cookie.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  summarizedPrice: number;

  constructor(
    private cartService: CartService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    if(localStorage.length != 0) {

      this.getCartFromLocalStorage();
    }
    this.items = this.cartService.getItems();
    this.saveCartToLocalStorage();
    
  }
  saveCartToLocalStorage(){
    localStorage.clear();
    this.items.forEach((item, index) => {
      localStorage.setItem(index, item.name);
    });
  }
  getCartFromLocalStorage() {
  //   Object.keys(localStorage).forEach(function(index){

  //  });
  for (let i = 0; i < localStorage.length; i++) {
    this.items[0];
    let key = localStorage.key(i);
    this.items[i] = localStorage.getItem(key);
   }
  }
}
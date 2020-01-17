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
  globalAmount: number;
  summarizedPrice: number;

  constructor(
    private cartService: CartService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.saveCartToLocalStorage();
    this.sumItemsInCart();
  }
  saveCartToLocalStorage(){
    localStorage.clear();
    this.items.forEach((item, index) => {
      localStorage.setItem(index, item.name);
    });
  }
  getCartFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      this.items[0];
      let key = localStorage.key(i);
      this.items[i] = localStorage.getItem(key);
    }
  }
  sumItemsInCart() {
    this.globalAmount = 0;
    this.items.forEach((item) => {
      this.globalAmount += Number(item.amount);
    });   
  }
  loadAmountPlus(index){
    this.items[index].amount++;
    this.sumItemsInCart();
    this.items = this.cartService.calcTotalPrice();
  }
  loadAmountMinus(index){
    this.items[index].amount--;
    this.items = this.cartService.calcTotalPrice();
    this.sumItemsInCart();
  }
}
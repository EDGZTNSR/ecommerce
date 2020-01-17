import { Injectable, ɵPlayState } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    product.amount++;
    this.items.push(product);
  }

  getItems() {
    const filtered = this.items
      .filter((value, index, self) => self.indexOf(value) === index);
    let items = [...filtered];
    this.items = items;
    console.log(this.items);
    this.items = this.calcTotalPrice();
    // console.log(this.items);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  calcTotalPrice(){
    this.items.forEach(item => {
      item.summedPrize = item.specialPrice * item.amount;
    });
    return this.items
  }
  // calcPrice(){
  //   this.items.getThatMotherFUckingPriceForPLS();
  //   return this.items;
  // }
  
  // calcQuantityPerProduct(){
  //   this.items.forEach(e => {
      
  //   });
  // }

}
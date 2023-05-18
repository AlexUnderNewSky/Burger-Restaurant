import { Restaurant } from '../Singleton/restaurant.js';



export class Cashier {
  constructor() {
    this.order = null;
  }


  takeOrder(order) {
  
    this.order = order;

  }

  sendOrderToChef() {
    const restaurant = Restaurant.getInstance();
    const chef = restaurant.getChef();
    chef.cookBurger(this.order);

  }
}
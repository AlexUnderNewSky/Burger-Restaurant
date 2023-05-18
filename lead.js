import { Restaurant } from './Singleton/restaurant.js';
import { Cashier } from './Command/cashier.js';
import { Chef } from './Command/chef.js';

document.addEventListener('DOMContentLoaded', function () {

  const orderForm = document.getElementById('order-form');

  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const burgerType = document.getElementById('burger-type').value;

    const sauceType = document.getElementById('sauce-type').value;
    const cashier = new Cashier();
    const chef = new Chef();

    const restaurant = Restaurant.getInstance();
    restaurant.hireCashier(cashier);
    restaurant.momicheChef(chef);

    cashier.takeOrder({ burgerType, sauceType });
    cashier.sendOrderToChef();

    orderForm.reset();
    
  });

} );
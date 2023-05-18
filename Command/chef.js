import { Kitchen } from '../Factory/kitchen.js';

export class Chef {
  cookBurger(order) {
    const kitchen = new Kitchen();
    const burger = kitchen.createBurger(order.burgerType);
    
    const decoratedBurger = kitchen.addSauce(burger, order.sauceType);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Cooked a burger - ${decoratedBurger.getDescription()}`;
  }
}
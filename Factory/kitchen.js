import { RoyalBurger, ClassicBurger, VegetarianBurger } from './burgers.js';
import { GarlicSauce, Ketchup } from '../Decorator/tuckBurger.js';



export class Kitchen {
  createBurger(burgerType) {
    let burger;

    if (burgerType === 'royal') {
      burger = new RoyalBurger();
    } else if (burgerType === 'classic') {
      burger = new ClassicBurger();
    } else if (burgerType === 'vegetarian') {
      burger = new VegetarianBurger();
    }


    return burger;
    
  }

  addSauce(burger, sauceType) {
    let tuckBurger = burger;


    if (sauceType === 'garlic') {
      tuckBurger = new GarlicSauce(burger);
    } else if (sauceType === 'ketchup') {
      tuckBurger = new Ketchup(burger);
    }

    return tuckBurger;
  }

}
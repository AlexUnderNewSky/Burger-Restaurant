import { Burger } from '../Factory/burgers.js';


export class TuckBurger extends Burger {
  constructor(burger) {
    super();
    this.burger = burger;

  }

  getDescription() {
    return this.burger.getDescription();
  }


}

export class GarlicSauce extends TuckBurger {
  getDescription() {
    return `${this.burger.getDescription()} with garlic sauce.`;
  }

}

export class Ketchup extends TuckBurger {
  getDescription() {
    return `${this.burger.getDescription()} with ketchup.`;
  }
}
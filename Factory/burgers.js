export class Burger {
    getDescription() {
      return this.description;
    }
  }
  
  export class RoyalBurger extends Burger {
    constructor() {

      super();
      this.description = 'Royal Burger';

    }
  }
  
  export class ClassicBurger extends Burger {
    constructor() {
      super();
      this.description = 'Classic Burger';
    }
    
  }
  
  export class VegetarianBurger extends Burger {
    constructor() {
      super();
      this.description = 'Vegetarian burger';
    }
  }
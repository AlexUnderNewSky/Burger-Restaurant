
export const Restaurant = (function () {
  let instance;

  function createInstance() {

    let chef = null;

    let cashier = null;

    return {

      momicheChef: function (momicheChefInstance) {
        chef = momicheChefInstance;
      },
      hireCashier: function (cashierInstance) {
        cashier = cashierInstance;
      },
      getCashier: function () {
        return cashier;
      },
      getChef: function () {
        return chef;
      }

    };

  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };

} )();
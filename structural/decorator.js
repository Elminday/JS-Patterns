class Pasta {
  constructor() {
      this.price = 0;
  }
  getPrice() {
      return this.price;
  }
}

class Carbonara extends Pasta {
  constructor() {
      super();
      this.price = 8;
  }
}


class PastaDecorator extends Pasta {
  constructor(pasta) {
      super();
      this.pasta = pasta;
  }

  getPrice() {
      return this.pasta.getPrice();
  }
}


class SauceDecorator extends PastaDecorator {
  constructor(pasta) {
      super(pasta);
  }

  getPrice() {
      return super.getPrice() + 5;
  }
}

class CheeseDecorator extends PastaDecorator {
  constructor(pasta) {
      super(pasta);
  }

  getPrice() {
      return super.getPrice() + 3;
  }
}

export { Carbonara, SauceDecorator, CheeseDecorator };
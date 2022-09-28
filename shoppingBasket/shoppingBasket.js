class ShoppingBasket {
  constructor() {
    this.total_price = [];
  }
  getTotalPrice() {
    let total = 0;
    this.total_price.map((element) => (total += element));
    return total;
  }

  addItem(candy) {
    this.total_price.push(candy.getPrice());
  }
}

module.exports = ShoppingBasket;

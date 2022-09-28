const ShoppingBasket = require("./shoppingBasket");

describe("add candy name and price, display total price", () => {
  it("display price as zero to start with", () => {
    const shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.getTotalPrice()).toEqual(0);
  });

  it("adds a candy and displays the price of it", () => {
    const shoppingBasket = new ShoppingBasket();
    const candy = { getName: () => "Twix", getPrice: () => 10 };
    shoppingBasket.addItem(candy);
    result = shoppingBasket.getTotalPrice();
    expect(result).toEqual(10);
  });
  it("adds multiple candies and displays the total price", () => {
    const shoppingBasket = new ShoppingBasket();
    const candy1 = { getName: () => "Twix", getPrice: () => 10 };
    const candy2 = { getName: () => "Snikers", getPrice: () => 5 };
    const candy3 = { getName: () => "Sweets", getPrice: () => 3 };
    shoppingBasket.addItem(candy1);
    shoppingBasket.addItem(candy2);
    shoppingBasket.addItem(candy3);
    result = shoppingBasket.getTotalPrice();
    expect(result).toBe(18);
  });
});

const Candy = require("./candy");

describe("Candy class", () => {
  it("get candy name and price", () => {
    const result = new Candy("Twix", 10);
    expect(result.getName()).toMatch("Twix");
    expect(result.getPrice()).toEqual(10);
  });
});

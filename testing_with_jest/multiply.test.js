const multiply = require("./multiply.js");

describe("multiples two number", () => {
  it("multiplies 7 and 5", () => {
    expect(multiply(7, 5)).toBe(35);
  });
});

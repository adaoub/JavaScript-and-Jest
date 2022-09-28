const fizzBuzz = require("./fizzbuzz");

describe("fizz buzz numbers", () => {
  it("returns 'fizz' when called with 3", () => {
    expect(fizzBuzz(3)).toMatch("Fizz");
  });
  it("returns 'Buzz' when called with 5", () => {
    expect(fizzBuzz(5)).toMatch("Buzz");
  });

  it("returns 8 when called with 8", () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it("returns 'FizzBuzz' when called with 15", () => {
    expect(fizzBuzz(15)).toMatch("FizzBuzz");
  });
});

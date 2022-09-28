const serachCandies = require("./serachCandies.js");

describe("serach candies function", () => {
  it("returns only Mars and Maltesrers", () => {
    expect(serachCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("returns only Mars", () => {
    expect(serachCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("returns only Skitties, skittles and starburst", () => {
    expect(serachCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("returns only Skitties, skittles", () => {
    expect(serachCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it("returns Mars and MAltesers even if prefix is given in lowercase", () => {
    expect(serachCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});

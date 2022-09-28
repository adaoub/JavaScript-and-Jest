const add = require("./add.js");

describe("add", () => {
  it("adds 2 and 2", () => {
    expect(add(2, 2)).toEqual(4);
  });
  it("adds 5 and 0", () => {
    expect(add(5, 0)).toEqual(5);
  });
});

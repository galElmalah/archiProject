const capitalize = require("./utils");
describe("capitalizeMicroservice", () => {
  it("should capitalize all the words", () => {
    const test = "yoel gal luft";
    expect(capitalize(test)).toEqual("Yoel Gal Luft");
    expect(capitalize(test.split(" ")[0])).toEqual("Yoel");
  });
});

const filterDigits = require("./utils");
describe("filterDigitsMicroservice", () => {
  it("should filter the digits of the string", () => {
    const test = "yoel123zeitoun";
    const test2 = "1234567890"
    expect(filterDigits(test)).toEqual("yoelzeitoun");
    expect(filterDigits(test2)).toEqual("");
  });
});

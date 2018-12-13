const removeSubString = require("./utils");
describe("removeSubStringMicroservice", () => {
  it("Remove subString from a string", () => {
    const test = "Hello Fantastic World";
    const subString = "Fantastic ";
    const subString2 = "Hello ";
    expect(removeSubString(test, subString)).toEqual("Hello World");
    expect(removeSubString(test, subString2)).toEqual("Fantastic World");
  });
});

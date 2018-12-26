const filterMultipleSpaces = require("./utils");
describe("filterMultipleSpacesMicroservice", () => {
  it("Removes redundant spaces", () => {
    let test = "Hello          World";
    expect(filterMultipleSpaces(test,)).toEqual("Hello World");
    test = "Hello World             "
    expect(filterMultipleSpaces(test)).toEqual("Hello World ");
    test = "       Hello World"
    expect(filterMultipleSpaces(test)).toEqual(" Hello World");
    test = "Hell  o W o r l d"
    expect(filterMultipleSpaces(test)).toEqual("Hell o W o r l d");
  });
});

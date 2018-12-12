const addDot = require("./utils");
describe("addDotMicroservice", () => {
  it("should add a dot", () => {
    const withDot = "llll.";
    const withoutDot = "yoel";
    expect(addDot(withoutDot)).toBe(withoutDot + ".");
    expect(addDot(withDot)).toBe(withDot);
    expect(addDot(withoutDot + "            ")).toBe(withoutDot + ".");
  });
});

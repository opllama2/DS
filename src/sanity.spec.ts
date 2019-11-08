// Sanity Test Suite for the browser

describe("Booleans", () => {
  it("should be true", () => expect(true).toBeTruthy());
  it("should be false", () => expect(false).toBeFalsy());
});

describe("Primitive Types", () => {
  it("should be a string", () => expect(typeof "hello").toBe("string"));
  it("should be a number", () => expect(typeof 4).toBe("number"));
});

describe("Reference Types", () => {
  it("should be an object", () => expect(typeof {}).toBe("object"));
  it("should be a function", () =>
    expect(typeof function() {}).toBe("function"));
  it("should be a string object", () =>
    expect(typeof new String("hello")).toBe("object"));
});

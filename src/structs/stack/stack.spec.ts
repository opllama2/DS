import { Stack } from "./stack";

let s: Stack;

beforeEach(() => {
  s = new Stack();
});

describe("push(val)", () => {
  it("should add entries to the stack", () => {
    spyOn(s, "push").and.callThrough();
    expect(s.size).toBe(0);
    s.push(8);
    expect(s.size).toBe(1);

    s.push(0);
    s.push(58);
    s.push("jsdfha");
    expect(s.size).toBe(4);
  });
});

describe("pop()", () => {
  it("should remove and return the next entry", () => {
    spyOn(s, 'pop').and.callThrough();
    // setup
    s.push(9);
    s.push(3);
    s.push(2);

    expect(s.size).toBe(3);

    // test
    let nextItem = s.pop();
    expect(s.size).toBe(2);
    expect(nextItem).toBe(2);

    nextItem = s.pop();
    expect(s.size).toBe(1);
    expect(nextItem).toBe(3);
  });
});
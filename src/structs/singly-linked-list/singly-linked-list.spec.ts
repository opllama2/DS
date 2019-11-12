import { SinglyLinkedList } from './singly-linked-list';

let list: SinglyLinkedList;

beforeEach(() => list = new SinglyLinkedList());

describe("Initial values", () => {
  it("should be empty", () => expect(list.size).toBe(0));
  it("should have no head", () => expect(list.first).toBeNull());
  it("should have no tail", () => expect(list.last).toBeNull());
});

describe("push", () => {
  beforeEach(() => {
    spyOn(list, "push").and.callThrough();
  })
  it("should add a node an empty list", () => {
    list.push(3);
    expect(list.size).toBe(1);
    expect(list.first).toBe(list.last);
  });

  it("should add an element to the end of the list", () => {
    list.push(4);
    list.push(5);
    expect(list.size).toBe(2);
    expect(list.last.value).toBe(5);
    expect(list.first).not.toBe(list.last);
  });
});

describe("getNodeAt", () => {
  beforeEach(() => {
    spyOn(list, "getNodeAt").and.callThrough();
  });

  it("should return null when called on empty list", () => {
    expect(list.getNodeAt(0)).toBeNull();
  });

  it("should return null when passed an index below 0", () => {
    list.push(4);
    expect(list.getNodeAt(-5)).toBeNull();
    expect(list.getNodeAt(0)).not.toBeNull();
  });

  it("should return null when passed an index >= the size", () => {
    list.push(5);
    list.push(2);
    list.push(543);
    expect(list.getNodeAt(3)).toBeNull();
    expect(list.getNodeAt(7)).toBeNull();
  });

  it("should return a node with a valid index", () => {
    list.push(8);
    list.push(3);
    list.push(54);

    expect(list.getNodeAt(0)).not.toBeNull();
    expect(list.getNodeAt(2)).not.toBeNull();
  });

  it("should return the correct node", () => {
    list.push(5);
    list.push(9);
    list.push(840);
    list.push(-58);

    expect(list.getNodeAt(2).value).toBe(840);
    expect(list.getNodeAt(3).value).toBe(-58);
    expect(list.getNodeAt(0).value).toBe(5);
    expect(list.getNodeAt(1).value).toBe(9);
  });

});
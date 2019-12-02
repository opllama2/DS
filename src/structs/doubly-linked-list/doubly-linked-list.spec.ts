import { DoublyLinkedList } from "./doubly-linked-list";

let list: DoublyLinkedList;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe("Initial state of the list", () => {
  it("should all be empty", () => {
    expect(list.first).toBeNull();
    expect(list.last).toBeNull();
    expect(list.size).toBe(0);
  })
});

describe("push(value)", () => {
  beforeEach(() => {
    spyOn(list, "push").and.callThrough();
  });

  it("should add an item to the list", () => {
    let newSize = list.push(4);
    expect(newSize).toBe(1);
    list.push(5);
    newSize = list.push(9);
    expect(newSize).toBe(3);
    expect(newSize).toBe(list.size);
  });

  it("should add an item to the end of the list", () => {
    list.push(5);
    expect(list.last.value).toBe(5);
    expect(list.first.value).toBe(5);
    list.push(7);
    expect(list.last.value).toBe(7);
    expect(list.first.value).toBe(5);
    list.push(9);
    expect(list.last.value).toBe(9);
    expect(list.first.value).toBe(5);
  });
});

describe("pop()", () => {
  beforeEach(() => {
    spyOn(list, "pop").and.callThrough();
  });

  it("should remove the last item from the list", () => {
    list.push(8);
    list.push(9);
    list.push(88);

    expect(list.size).toBe(3);
    let removedItem = list.pop();
    expect(list.size).toBe(2);
    expect(removedItem.value).toBe(88);
  });
});

describe("shift(value)", () => {
  beforeEach(() => {
    spyOn(list, "shift").and.callThrough();
  });

  it("should remove the head of the list", () => {
    //setup..
    list.push(5);
    list.push(40);
    list.push(70);

    expect(list.size).toBe(3);

    //call
    let removed = list.shift();
    // test
    expect(list.size).toBe(2);
    expect(removed.value).toBe(5);
    expect(list.first.value).toBe(40);
    expect(list.last.value).toBe(70);
  });
});

describe("getNodeAt(index)", () => {
  beforeEach(() => {
    spyOn(list, "getNodeAt").and.callThrough();
  });

  it("should get an item at the specified index", () => {
    // setup
    list.push(50);
    list.push(90);
    list.push(30);
    list.push(102);
    list.push(18);
    // call
    let item = list.getNodeAt(0);
    expect(item.value).toBe(50);

    item = list.getNodeAt(3);
    expect(item.value).toBe(102);
  });

  it("should return null with an invalid index", () => {
    list.push(60);
    list.push(80);
    list.push(71);
    list.push("afdasdf");
    expect(list.getNodeAt(-1)).toBeNull();
    expect(list.getNodeAt(4)).toBeNull();
    expect(list.getNodeAt(3).value).toBe("afdasdf");
    expect(list.getNodeAt(8840)).toBeNull();
  });
});

describe("unshift(value)", () => {
  beforeEach(() => {
    spyOn(list, 'unshift').and.callThrough();
  });

  it("should add an item to the beginning of the list", () => {
    list.unshift(8);
    expect(list.size).toBe(1);
    expect(list.first).toBe(list.last);
    list.unshift(9);
    expect(list.size).toBe(2);
    expect(list.first.value).toBe(9);
    expect(list.last.value).toBe(8);
  });
});

describe("insert(value, index)", () => {
  beforeEach(() => {
    spyOn(list, 'insert').and.callThrough();
  });

  it("should add an element to the specified index", () => {
    // push
    list.insert(8, list.size);
    expect(list.size).toBe(1);
    expect(list.getNodeAt(list.size - 1).value).toBe(8);

    // unshift
    list.insert(90, 0);
    expect(list.size).toBe(2);
    expect(list.getNodeAt(0).value).toBe(90);

    // random index
    list.push(80);
    list.push(85);
    list.push(478);
    expect(list.getNodeAt(4).value).toBe(478);
    expect(list.getNodeAt(2).value).toBe(80);
    list.insert(900, 2);
    expect(list.getNodeAt(2).value).toBe(900);
  })
});
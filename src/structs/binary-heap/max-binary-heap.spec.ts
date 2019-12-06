import { BinaryHeap } from "./binary-heap";

function compare(item1, item2) {
  return item1 > item2;
}

let heap: BinaryHeap<number>;

beforeEach(() => {
  heap = new BinaryHeap(compare);
});

describe("MaxHeap::initial setup", () => {
  it("should be empty", () => {
    expect(heap.size).toBe(0);
  });
});

describe("MaxHeap::insert(value)", () => {
  beforeEach(() => {
    spyOn(heap, 'insert').and.callThrough();
  });

  it("should add an element to the heap", () => {
    heap.insert(9);
    expect(heap.size).toBe(1);
    heap.insert(8);
    heap.insert(16);
    heap.insert(11);
    expect(heap.size).toBe(4);
  });

  it("should Keep the highest item as the head", () => {
    // setup
    heap.insert(9);
    heap.insert(8);
    heap.insert(16);
    heap.insert(11);
    heap.insert(40);

    let heapArray = heap.asArray();
    expect(heapArray[0]).toBe(40);
    heap.insert(800);
    heapArray = heap.asArray();
    expect(heapArray[0]).toBe(800);
    heap.insert(400);
    heapArray = heap.asArray();
    expect(heapArray[0]).toBe(800);
  });
});

describe("MaxHeap::extractHead()", () => {
  beforeEach(() => {
    spyOn(heap, 'extractHead').and.callThrough();
  });

  it("should remove the head from the heap", () => {
    // setup
    heap.insert(9);
    heap.insert(8);
    heap.insert(16);
    heap.insert(11);
    heap.insert(40);
    expect(heap.size).toBe(5);
    let head = heap.extractHead();
    expect(head).toBe(40);
    expect(heap.size).toBe(4);
    let heapArray = heap.asArray();
    expect(heapArray[0]).toBe(16);
  });
});
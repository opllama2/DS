import { BinaryHeap } from './binary-heap';
let heap: BinaryHeap<number>;

function compare(item1, item2) {
  return item1 < item2;
}

beforeEach(() => {
  heap = new BinaryHeap<number>(compare);
});

describe("MinHeap::initial", () => {
  it("should be empty", () => {
    expect(heap.size).toBe(0);
  });
});

describe("MinHeap::insert(value)", () => {
  beforeEach(() => {
    spyOn(heap, 'insert').and.callThrough();
  });

  it("should add items to the heap", () => {
    heap.insert(8);
    heap.insert(89);
    heap.insert(50);
    expect(heap.size).toBe(3);
    heap.insert(503);
    expect(heap.size).toBe(4);
  });

  it("should keep the lowest item as the head", () => {
    heap.insert(50);
    heap.insert(30);
    heap.insert(90);
    heap.insert(39);

    let heapArray = heap.asArray();
    expect(heapArray[0]).toBe(30);
    heap.insert(4);
    heapArray = heap.asArray();

    expect(heapArray[0]).toBe(4);
  });
});

describe("MinHeap::extractHead()", () => {
  beforeEach(() => {
    spyOn(heap, 'extractHead').and.callThrough();
  });

  it("should remove the head of the heap", () => {
    heap.insert(50);
    heap.insert(30);
    heap.insert(90);
    heap.insert(39);
    heap.insert(4);

    let head = heap.extractHead();
    expect(head).toBe(4);
    let heapArray = heap.asArray();
    expect(heapArray[0]).toBe(30);

    head = heap.extractHead();
    expect(head).toBe(30);
    heapArray = heap.asArray();
    expect(heapArray[0]).toBe(39);
  });
});

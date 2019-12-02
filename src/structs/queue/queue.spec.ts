import { Queue } from "./queue";

let q: Queue;

beforeEach(() => {
  q = new Queue();
});

describe("enqueue(val)", () => {
  beforeEach(() => {
    spyOn(q, 'enqueue').and.callThrough();
  });

  it("should add an entry to the queue", () => {
    expect(q.size).toBe(0);
    q.enqueue(4);
    expect(q.size).toBe(1);
    q.enqueue(6);
    q.enqueue(8);
    expect(q.size).toBe(3);
  });
});

describe("dequeue()", () => {
  beforeEach(() => {
    spyOn(q, 'dequeue').and.callThrough();
  });

  it("should remove and return the next entry in the queue", () => {
    // setup
    q.enqueue(9);
    q.enqueue(7);
    q.enqueue(4);
    q.enqueue(3);
    q.enqueue(1);

    expect(q.size).toBe(5);

    // test
    let nextItem = q.dequeue();
    expect(q.size).toBe(4);
    expect(nextItem).toBe(9);

    nextItem = q.dequeue();
    expect(q.size).toBe(3);
    expect(nextItem).toBe(7);
  });
});
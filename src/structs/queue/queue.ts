import { DoublyLinkedList } from "../doubly-linked-list/doubly-linked-list";

export class Queue {
  private items: DoublyLinkedList = null;
  constructor() {
    this.items = new DoublyLinkedList();
  }

  public get size() {
    return this.items.size;
  }

  /**
   * Adds a value to the queue
   * @param val the value to add to the queue
   * @returns {number} the new size of the queue
   */
  public enqueue(val): number {
    return this.items.push(val);
  }

  /**
   * removes the next item in the queue
   * @returns {any} the next item in the queue
   */
  public dequeue(): any {
    let next = this.items.shift();
    return next ? next.value : null;
  }
}
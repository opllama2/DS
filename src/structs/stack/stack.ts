import { DoublyLinkedList } from "../doubly-linked-list/doubly-linked-list";

export class Stack {
  private items: DoublyLinkedList = null;
  public get size() {
    return this.items.size;
  }

  constructor() {
    this.items = new DoublyLinkedList();
  }

  /**
   * adds an entry to the stack
   * @param val the value to add to the stack
   * @returns {number} the new size of the stack
   */
  push(val: any): number {
    return this.items.push(val);
  }

  /**
   * removes and returns the next entry in the stack
   * @returns {any} the next entry in the stack
   */
  pop(): any {
    let next = this.items.pop();
    return next ? next.value : null;
  }
}
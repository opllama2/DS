import { ListNode } from "../classes/list-node";
import { LinkedList } from "../interfaces/linked-list";

export class SinglyLinkedList implements LinkedList {
  private head: ListNode = null;
  private tail: ListNode = null;
  private _size: number = 0;

  /**
   * The size of the list.
   */
  public get size(): number {
    return this._size;
  }

  /**
   * The head of the list
   */
  public get first(): any {
    return this.head ? this.head.value : null;
  }

  /**
   * The tail of the list
   */
  public get last(): any {
    return this.tail ? this.tail.value : null;
  }

  /**
   * pushes a node to the end of the list
   * @param val the value of the new node
   * @returns {number} the new size of the list
   */
  public push(val: any): number {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this._size;
  }

  /**
   * get the node at the specified index
   * @param index the index of the node
   * @returns {ListNode} the node at the specified index
   */
  public getNodeAt(index: number): ListNode {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let tmp = this.head,
      counter = 0;
    while (counter !== index) {
      counter++;
      tmp = tmp.next;
    }

    return tmp;
  }

  /**
   * removes the tail (last) item in the list.
   * @returns {ListNode} the node that was removed
   */
  public pop(): ListNode {
    if (this.head === null) {
      return null;
    }
    const pre = this.getNodeAt(this._size - 2);
    const toRemove = this.tail;
    pre.next = null;
    this.tail = pre;
    this._size--;
    return toRemove;
  }

  /**
   * Removes the head (first) item in the list.
   * @returns {ListNode} the node that was removed
   */
  public shift(): ListNode {
    if (this.head === null) {
      return null;
    }

    const toRemove = this.head;
    const newHead = toRemove.next;
    toRemove.next = null;
    this.head = newHead;
    this._size--;
    return toRemove;
  }

  /**
   * Adds a node at the beginning of the list
   * @param val the value of the new node
   * @returns {number} the new size of the list
   */
  public unshift(val: any): number {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return ++this._size;
  }

  /**
   * Inserts a new node at the specified location
   * @param val the value of the new node
   * @param index the location of the new node
   * @returns {number} the new size of the list
   */
  public insert(val: any, index: number): number {
    if (index === 0) this.unshift(val);
    else if (index === this._size) this.push(val);
    else {
      const prev = this.getNodeAt(index - 1);
      const next = prev.next;
      const current = new ListNode(val);
      prev.next = current;
      current.next = next;
    }

    return ++this._size;
  }
}

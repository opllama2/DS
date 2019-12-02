import { LinkedList } from "../../interfaces/linked-list";
import { ListNode } from "../../classes/list-node";

export class DoublyLinkedList implements LinkedList {
  private head: ListNode = null;
  private tail: ListNode = null;
  private _size: number = 0;

  /**
   * The size of the list
   */
  public get size(): number {
    return this._size;
  }

  /**
   * The head of the list
   */
  public get first(): ListNode {
    return this.head;
  }

  /**
   * The tail of the list
   */
  public get last(): ListNode {
    return this.tail;
  }

  /**
   * Adds a node to the end of the list
   * @param val the value of the new node
   * @returns {number} the new size of the list
   */
  public push(val: any): number {
    const newNode = new ListNode(val);
    if(this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    return ++this._size;
  }

  /**
   * Removes the tail (last) node of the list.
   * @returns {ListNode} the node that was removed
   */
  public pop(): ListNode {
    if(this.head === null)
      return null;
    const toRemove = this.tail;
    this.tail = toRemove.prev;
    this.tail.next = null;
    toRemove.prev = null;
    this._size--;
    return toRemove;
  }

  /**
   * Removes the head (first) node of the list
   * @returns {ListNode} the node that was removed
   */
  public shift(): ListNode {
    if(this.head === null)
      return null;
    const toRemove = this.head;
    const newHead = toRemove.next;
    this.head = newHead;
    toRemove.next = null;
    this.head.prev = null;
    this._size--;
    return toRemove;
  }

  /**
   * returns the node at the specified index.
   * @param index the index of the node
   */
  public getNodeAt(index: number): ListNode {
    if(index < 0 || index >= this._size)
      return null;
    let meta = {
      dir: index < this._size / 2 ? 'next' : 'prev',
      start: index < this._size / 2 ? this.head : this.tail,
      change: index < this._size / 2 ? 1 : -1,
      counter: index < this._size / 2 ? 0 : this._size - 1
    }
    let current = meta.start;
    while(meta.counter !== index) {
      meta.counter += meta.change;
      current = current[meta.dir];
    }

    return current;
  }

  /**
   * adds a new node to the beginning of the list
   * @param val the value of the new node
   * @returns {number} the new size of the list.
   */
  unshift(val: any): number {
    const newNode = new ListNode(val);
    if(this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return ++this._size;
  }

  /**
   * adds a node to the specified index in the list.
   * @param val the value of the new node
   * @param index the position of the new node
   * @returns {number} the new size of the list
   */
  public insert(val: any, index: number): number {
    if(index === 0) return this.unshift(val);
    else if (index === this._size) return this.push(val);
    else {
      const pre = this.getNodeAt(index - 1);
      const next = pre.next;
      const current = new ListNode(val);
      pre.next = current;
      current.prev = pre;
      current.next = next;
      next.prev = current;
      return ++this._size;
    }
  }
}
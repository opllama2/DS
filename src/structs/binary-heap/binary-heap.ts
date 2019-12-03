import { Comparator } from "../../types/comparator";

export class BinaryHeap<T> {
  private items: T[];
  /**
   * a comparator function that determines if an item should be moving up the heap
   * it receives the current item and the parent item.
   */
  public comparator: Comparator<T>;

  public get size() {
    return this.items.length;
  }

  constructor(comp: Comparator<T>) {
    if(!comp)
      throw new Error("No Comparator provided!");
    this.items = [];
    this.comparator = comp;
  }

  /**
   * Adds a value to the heap
   * @param value the value to add
   */
  insert(value: T): void {
    this.items.push(value);
    this.heapify();
  }

  /**
   * goes through the heap and makes sure every element is in place according to a comparator function.
   * @param comparator an optional comparator to override the default.
   */
  heapify(comparator: Comparator<T> = this.comparator): void {
    let currentIndex = this.items.length - 1;
    let parentIndex = this.parentOf(currentIndex);

    while(
      comparator(this.items[currentIndex], this.items[parentIndex])
    ) {
      // the current item should be moved up...
      [this.items[currentIndex], this.items[parentIndex]] = [this.items[parentIndex], this.items[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = this.parentOf(currentIndex);
    }
  }

  /**
   * Removes the head of the heap
   * @returns {T} the removed element.
   */
  extractHead(): T {
    [this.items[0], this.items[this.items.length - 1]] = [this.items[this.items.length - 1], this.items[0]];

    const head = this.items.pop();
    this.drillDown();
    return head;
  }

  /**
   * goes through the heap after the head is removed and makes sure everything is in place.
   */
  private drillDown(): void {
    let currentIndex = 0;
    let nextChildIndex = this.nextChildToDrill(currentIndex);
    while(nextChildIndex && this.comparator(
      this.items[nextChildIndex],
      this.items[currentIndex]
    )) {
      [this.items[currentIndex], this.items[nextChildIndex]] = [this.items[nextChildIndex], this.items[currentIndex]];
      currentIndex = nextChildIndex;
      nextChildIndex = this.nextChildToDrill(currentIndex);
    }
  }

  /**
   * returns the index of the parent of the passed child
   * @param index the index of the child
   */
  parentOf(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /**
   * returns an array of indices of the children of a specific parent.
   * @param index the index of the parent
   */
  childrenOf(index: number): number[] {
    return [
      2 * index + 1,
      2 * index + 2
    ];
  }

  /**
   * returns the index of the child which should be compared with during the drill down operation.
   * @param index the index of the current item
   */
  private nextChildToDrill(index: number): number {
    const children = this.childrenOf(index);
    if(!children.length) return null;
    else if (children.length == 1) return children[0];
    else return this.comparator(
      this.items[children[0]], this.items[children[1]]
    ) ? children[0] : children[1];
  }

  asArray(): T[] {
    return this.items.slice(0);
  }
}
import { ListNode } from "../classes/list-node";

export interface LinkedList {
  size: number;
  first: ListNode;
  last: ListNode;

  push: (val: any) => number;
  pop: () => ListNode;
  getNodeAt: (index: number) => ListNode;
  shift: () => ListNode;
  unshift: (val: any) => number;
  insert: (val: any, index: number) => number;
}

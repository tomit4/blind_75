class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {};

let list1: ListNode | null = new ListNode(
  1,
  new ListNode(4, new ListNode(5, null)),
);
let list2: ListNode | null = new ListNode(
  1,
  new ListNode(3, new ListNode(4, null)),
);
let list3: ListNode | null = new ListNode(2, new ListNode(6, null));

let lists: Array<ListNode | null> = [list1, list2, list3];

console.log("mergeKLists(lists) :=>", mergeKLists(lists));
// Output: [1,1,2,3,4,4,5,6]

lists = [null];
console.log("mergeKLists(lists) :=>", mergeKLists(lists));
// Output: []

lists = [new ListNode()];
console.log("mergeKLists(lists) :=>", mergeKLists(lists));
// Output: []

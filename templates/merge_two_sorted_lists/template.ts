class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {};

let list1: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2: ListNode | null = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));

list1 = null;
list2 = null;
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));

list1 = null;
list2 = new ListNode(0, null);
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));

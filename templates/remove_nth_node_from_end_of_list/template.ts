class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {};

let sLL = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
);
console.log("removeNthFromEnd(sLL, 2) :=>", removeNthFromEnd(sLL, 2));

sLL = new ListNode(1, null);
console.log("removeNthFromEnd(sLL, 1) :=>", removeNthFromEnd(sLL, 1));

sLL = new ListNode(1, new ListNode(2, null));
console.log("removeNthFromEnd(sLL, 1) :=>", removeNthFromEnd(sLL, 1));

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Uses recursion to continually traverse list looking for which has lower value
const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l1);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l2);
    return l2;
  }
};

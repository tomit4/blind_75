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
): ListNode | null => {
  // Uses dummyHead which points to
  // undefined to start new linked list
  const dummyHead = new ListNode();
  let ptr = dummyHead;
  // creates references for traversing
  let p1 = list1;
  let p2 = list2;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      ptr.next = p1;
      p1 = p1.next;
    } else {
      ptr.next = p2;
      p2 = p2.next;
    }
    // smart, uses the ptr to the final list to
    // traverse as he fills with either p1 or p2 vals
    ptr = ptr.next;
  }
  // uses nullish coalescing operator to assign null to the final node
  ptr.next = p1 ?? p2;
  // removes reference to dummyHead by returning the rest of the new list
  return dummyHead.next;
};

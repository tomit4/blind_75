class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const printList = (head: ListNode | null): void => {
  let listStr = "";
  while (head !== null) {
    listStr = `${listStr}${head.val} -> `;
    head = head.next;
  }
  listStr = `${listStr}null`;
  console.log(listStr);
};

const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {
  // create dummy node that prepends to head
  const dummy = new ListNode(0, head);
  // start left at dummy
  let left: ListNode | null = dummy;
  // start right at head (1 ahead of dummy)
  let right: ListNode | null = head;

  // reallocate right to n positions ahead of left
  while (n > 0 && right !== null) {
    right = right.next;
    n -= 1;
  }

  // traverse both right and left ahead until right reaches end of list
  // right is always n positions ahead of left
  while (right !== null) {
    left = left.next!;
    right = right.next;
  }

  // Remove node at left.next
  left.next = left.next ? left.next.next : null;
  // return the rest of the remaining list
  return dummy.next;
};

let sLL: ListNode | null = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
);
sLL = removeNthFromEnd(sLL, 2);
printList(sLL);

sLL = new ListNode(1, null);
sLL = removeNthFromEnd(sLL, 2);
printList(sLL);

sLL = new ListNode(1, new ListNode(2, null));
sLL = removeNthFromEnd(sLL, 2);
printList(sLL);

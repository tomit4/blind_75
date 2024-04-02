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
): ListNode | null => {};

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

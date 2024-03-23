class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// intelligently, our solution creator creates
// a helper function to find the length of the linked list
const findLength = (head: ListNode | null): number => {
  let count = 0;
  if (head === null) return count;
  let curr: ListNode | null = head;
  while (curr !== null) {
    count++;
    curr = curr.next;
  }
  return count;
};

const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {
  if (head === null) return null;
  let length = findLength(head);
  let i = 0;
  // here is what I missed, they find the index of the
  // element we want to delete by subracting it from the overall length of the list
  let traverseTill = length - n - 1;
  // in case there is only one element in the list
  if (traverseTill === -1) return head.next;
  let curr = head;
  // we then traverse the entire linked list until our index(i) is less than the element we want to delete
  while (i < traverseTill) {
    curr = curr.next!;
    i++;
  }
  // we then reassign the next to next.next if it's not null
  curr.next = curr.next ? curr.next.next : null;
  // and return our adjusted linked list
  // (no need to delete list as we are just removing reference, i.e. garbage collection)
  return head;
};

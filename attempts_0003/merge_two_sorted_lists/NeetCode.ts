// uses dummy and tail with using the 2 lists as
// references in a two pointer technique
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
  const dummy = new ListNode();
  // tail is a kind of current to traverse along with our two list pointers
  let tail = dummy;

  // as long as one of the lists hasn't been traversed
  while (list1 !== null && list2 !== null) {
    // tail.next is assigned to the list that has the greater val
    // and we traverse the list with the greater value
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    // either way, we also traverse our finalized list
    tail = tail.next;

    // because we could traverse to the end of
    // one list before traversing the entirety of the other,
    // we make sure to simply append the remaining listnodes to the end of our new list
    if (list1 !== null) {
      tail.next = list1;
    } else if (list2 !== null) {
      tail.next = list2;
    }
  }
  // note how we return dummy, not tail, as tail references dummy
  return dummy.next;
};

let list1: ListNode | null = new ListNode(
  1,
  new ListNode(2, new ListNode(4, null)),
);
let list2: ListNode | null = new ListNode(
  1,
  new ListNode(3, new ListNode(4, null)),
);
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
// Output: [1,1,2,3,4,4]

list1 = null;
list2 = null;
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
// Output: null

list1 = null;
list2 = new ListNode(0, null);
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
// Output: null

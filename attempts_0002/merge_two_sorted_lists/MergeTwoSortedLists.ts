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
  if (list1 === null && list2 === null) return null;
  if (list1 === null && list2 !== null) {
    return list2;
  }
  if (list1 !== null && list2 === null) {
    return list1;
  }
  const head =
    list1?.val && list2?.val && list1.val > list2.val ? list1 : list2;
  const dummy = new ListNode(undefined, head);
  return list1;
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
// Output: []

list1 = null;
list2 = new ListNode(0, null);
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
// Output: [0]

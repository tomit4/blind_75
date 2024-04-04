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

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  let dummy: ListNode | null;
  if (list1 !== null && list2 !== null && list1.val > list2.val) {
    dummy = new ListNode(0, list1);
  } else {
    dummy = new ListNode(0, list2);
  }
  let tail: ListNode | null = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1 !== null) {
    tail.next = list1;
  } else if (list2 !== null) {
    tail.next = list2;
  }
  return dummy.next;
};

let list1: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2: ListNode | null = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList: ListNode | null = mergeTwoLists(list1, list2);
printList(mergedList);
// 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null

list1 = null;
list2 = null;
mergedList = mergeTwoLists(list1, list2);
printList(mergedList);
// null

list1 = null;
list2 = new ListNode(0, null);
mergedList = mergeTwoLists(list1, list2);
printList(mergedList);
// 0 -> null

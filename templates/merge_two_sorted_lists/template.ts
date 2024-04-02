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
): ListNode | null => {};

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

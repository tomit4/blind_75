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

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {};

let list1: ListNode | null = new ListNode(
  1,
  new ListNode(4, new ListNode(5, null)),
);
let list2: ListNode | null = new ListNode(
  1,
  new ListNode(3, new ListNode(4, null)),
);
let list3: ListNode | null = new ListNode(2, new ListNode(6, null));

let lists: Array<ListNode | null> = [list1, list2, list3];

let mergedList = mergeKLists(lists);
printList(mergedList);
// 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6 -> null

lists = [null];
mergedList = mergeKLists(lists);
printList(mergedList);
// null

lists = [new ListNode()];
mergedList = mergeKLists(lists);
printList(mergedList);
// 0 -> null

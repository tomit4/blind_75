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

const mergeLists = (
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

// O(n * log(k))
const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  if (!lists || lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    const mergedList: Array<ListNode | null> = [];
    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i];
      const list2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedList.push(mergeLists(list1, list2));
    }
    lists = mergedList;
  }
  return lists[0];
};

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

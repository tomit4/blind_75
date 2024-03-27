// first time neetcode has failed me,
// does not work, endless loop where console logs are
// EDIT: see line 41, added if statement to check if one list is null
// at least passes run, does not pass submit (didn't submit)
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  if (lists === null || lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const mergedLists: Array<ListNode | null> = [];

    // we merge every two pairs of lists
    // note how we skip over every second list in our lists array
    for (let i = 0; i < lists.length; i += 2) {
      let list1 = lists[i];
      // because we skip  over every other element,
      // we have to check if the next element is out of bounds
      let list2 = i + 1 < lists.length ? lists[i + 1] : null;
      const singleMergedList = mergeList(list1, list2);
      // confusingly, push eventually returns a single list
      mergedLists.push(singleMergedList);
    }
    // once our mergedLists is populated, the lists array is reassigned to mergedLists
    // onc our mergedLists array has only one linked list in it, the while loop ends
    lists = mergedLists;
  }
  return lists[0];
};

// works, same as mergeTwoSortedLists
const mergeList = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  const dummy = new ListNode();
  let tail = dummy;

  // added this to get test cases to pass
  if (list1 !== null && list2 === null) {
    return list1;
  } else if (list1 === null && list2 !== null) {
    return list2;
  }

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
    if (list1 !== null) {
      tail.next = list1;
    } else if (list2 !== null) {
      tail.next = list2;
    }
  }
  return dummy.next;
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
console.log("mergeKLists(lists) :=>", mergeKLists(lists));
// Output: [1,1,2,3,4,4,5,6]
// [
// 1->4->5,
// 1->3->4,
// 2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
/*
lists = [null];
console.log("mergeKLists(lists) :=>", mergeKLists(lists));
// Output: []

lists = [new ListNode()];
console.log("mergeKLists(lists) :=>", mergeKLists(lists));
// Output: []
*/

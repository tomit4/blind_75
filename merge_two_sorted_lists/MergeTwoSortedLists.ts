// 03/23/2024
// passed. easy problem, convoluted solution using destructuring and array sorting methods
// took way too long
// beats 49.48%
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
  let current1 = list1!;
  let current2 = list2!;
  const listArr1: ListNode[] = [];
  const listArr2: ListNode[] = [];
  while (current1 !== null) {
    listArr1.push(current1);
    current1 = current1.next!;
  }
  while (current2 !== null) {
    listArr2.push(current2);
    current2 = current2.next!;
  }
  const listArr: ListNode[] = [...listArr1, ...listArr2].sort(
    (a, b) => a.val - b.val,
  );
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].next !== listArr[i + 1]) {
      listArr[i].next = listArr[i + 1] ? listArr[i + 1] : null;
    }
  }
  return listArr[0];
};

let list1: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2: ListNode | null = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));

list1 = null;
list2 = null;
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));

list1 = null;
list2 = new ListNode(0, null);
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));

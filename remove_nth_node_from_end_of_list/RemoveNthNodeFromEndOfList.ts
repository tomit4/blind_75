// success, but took waaay too long, beats ~31.63%
// NOTE: no need to add class to solution on LC
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {
  if (head === null) return null;
  let current: ListNode | null = head;
  // count all elements in linked list
  let i = 0;
  while (current !== null) {
    i++;
    current = current.next;
  }
  // create a map of all nodes in linked list index them by count
  const map = {};
  current = head;
  while (i > 0 && current !== null) {
    if (!map[i]) {
      map[i] = current;
    }
    current = current.next;
    i--;
  }
  // if the element to be deleted to is pointed to,
  // we have found the node previous to the one we want to delete
  // re-assign it's next pointer to the next.next one (i.e. skip over it)
  for (const key in map) {
    if (map[n] === map[key].next) {
      map[key].next = map[key].next.next;
    }
  }
  // delete the node
  delete map[n];
  // create an array of remaining listnodes and populate it
  // NOTE: because we populated the map's indexes "backwards", we unshift and don't push
  const returnArr: { val: number; next: ListNode | null }[] = [];
  for (const key in map) {
    returnArr.unshift(map[key]);
  }
  // return the first node if it exists, else null
  return returnArr[0] ? returnArr[0] : null;
};

let sLL = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
);
console.log("removeNthFromEnd(sLL, 2) :=>", removeNthFromEnd(sLL, 2));

sLL = new ListNode(1, null);
console.log("removeNthFromEnd(sLL, 1) :=>", removeNthFromEnd(sLL, 1));

sLL = new ListNode(1, new ListNode(2, null));
console.log("removeNthFromEnd(sLL, 1) :=>", removeNthFromEnd(sLL, 1));

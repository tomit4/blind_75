class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const removeNthFromEnd = (head, n) => {
    if (head === null)
        return null;
    // traverse the list
    let current = head;
    const map = {};
    let i = 0;
    while (current !== null) {
        i++;
        current = current.next;
    }
    current = head;
    while (i > 0 && current !== null) {
        if (!map[i]) {
            map[i] = current;
        }
        current = current.next;
        i--;
    }
    // console.log("map :=>", map);
    for (const key in map) {
        if (map[n] === map[key].next) {
            console.log("gotem :=>");
            map[key].next = map[key].next.next;
        }
    }
    delete map[n];
    const returnArr = [];
    for (const key in map) {
        returnArr.unshift(map[key]);
    }
    console.log("map :=>", map);
    /*
    current = returnArr[0];
    while (current) {
      console.log("current :=>", current);
      current = current.next;
    }
    */
    return returnArr[0] ? returnArr[0] : null;
};
let sLL = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
console.log("removeNthFromEnd(sLL, 2) :=>", removeNthFromEnd(sLL, 2));
sLL = new ListNode(1, null);
console.log("removeNthFromEnd(sLL, 1) :=>", removeNthFromEnd(sLL, 1));
sLL = new ListNode(1, new ListNode(2, null));
console.log("removeNthFromEnd(sLL, 1) :=>", removeNthFromEnd(sLL, 1));

class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const printList = (head) => {
    let listStr = "";
    while (head !== null) {
        listStr = `${listStr}${head.val} -> `;
        head = head.next;
    }
    listStr = `${listStr}null`;
    console.log(listStr);
};
const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;
    // ensures right points to exactly n nodes ahead of left
    while (n > 0 && right !== null) {
        right = right.next;
        n -= 1;
    }
    while (right !== null) {
        left = left.next; // ! because right will always be ahead of left
        right = right.next;
    }
    // delete
    left.next = left.next.next;
    return dummy.next;
};
let sLL = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
sLL = removeNthFromEnd(sLL, 2);
printList(sLL);
sLL = new ListNode(1, null);
sLL = removeNthFromEnd(sLL, 2);
printList(sLL);
sLL = new ListNode(1, new ListNode(2, null));
sLL = removeNthFromEnd(sLL, 2);
printList(sLL);

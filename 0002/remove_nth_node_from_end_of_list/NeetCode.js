class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const removeNthFromEnd = (head, n) => {
    if (head === null)
        return null;
    let dummy = new ListNode(0, head);
    let leftPtr = dummy;
    let rightPtr = head;
    // how to initialize rgihtPtr at node ahead of leftPtr by count;
    while (n > 0 && rightPtr) {
        if (rightPtr !== null) {
            rightPtr = rightPtr.next;
        }
        n--;
    }
    while (rightPtr !== null) {
        leftPtr = leftPtr !== null ? leftPtr.next : null;
        rightPtr = rightPtr.next;
    }
    if (leftPtr !== null && leftPtr.next !== null) {
        leftPtr.next = leftPtr.next.next;
    }
    return dummy.next;
};
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
let n = 2;
console.log("removeNthFromEnd(head, n) :=>", removeNthFromEnd(head, n));
head = new ListNode(1, null);
n = 1;
console.log("removeNthFromEnd(head, n) :=>", removeNthFromEnd(head, n));
head = new ListNode(1, new ListNode(2, null));
n = 1;
console.log("removeNthFromEnd(head, n) :=>", removeNthFromEnd(head, n));

class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode();
    let tail = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
        if (list1 !== null) {
            tail.next = list1;
        }
        else if (list2 !== null) {
            tail.next = list2;
        }
    }
    return dummy.next;
};
let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
// Output: [1,1,2,3,4,4]
list1 = null;
list2 = null;
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
// Output: []
list1 = null;
list2 = new ListNode(0, null);
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
// Output: [0]

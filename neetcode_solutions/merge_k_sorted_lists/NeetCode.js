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
const mergeList = (list1, list2) => {
    const dummy = new ListNode(0, null);
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
    }
    if (list1 !== null) {
        tail.next = list1;
    }
    if (list2 !== null) {
        tail.next = list2;
    }
    return dummy.next;
};
const mergeKLists = (lists) => {
    if (lists === null || lists.length === 0)
        return null;
    while (lists.length > 1) {
        const mergedLists = [];
        // divide and conquer approach, every 2 lists...
        for (let i = 0; i < lists.length; i += 2) {
            const list1 = lists[i];
            const list2 = lists[i + 1] ? lists[i + 1] : null;
            // generates a new mergedList and pushes to array,
            // eventually merging with a null value and returning
            // an array of length 1
            mergedLists.push(mergeList(list1, list2));
        }
        // reassignment to lists and also mergeList algorithm ensures
        // while loop ends once there is only 1 list in array
        lists = mergedLists;
    }
    return lists[0];
};
let list1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
let list3 = new ListNode(2, new ListNode(6, null));
let lists = [list1, list2, list3];
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

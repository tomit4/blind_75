class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const mergeTwoLists = (list1, list2) => {
    // if both lists are null
    if (list1 === null && list2 === null)
        return null;
    // if list1 is null
    if (list1 === null && list2 !== null) {
        return list2;
    }
    // if list2 is null
    if (list1 !== null && list2 === null) {
        return list1;
    }
    let current1 = list1;
    let current2 = list2;
    const listArr1 = [];
    const listArr2 = [];
    while (current1 !== null) {
        listArr1.push(current1);
        current1 = current1.next;
    }
    while (current2 !== null) {
        listArr2.push(current2);
        current2 = current2.next;
    }
    const listArr = [...listArr1, ...listArr2].sort((a, b) => a.val - b.val);
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].next !== listArr[i + 1]) {
            listArr[i].next = listArr[i + 1] ? listArr[i + 1] : null;
        }
    }
    return listArr[0];
};
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
list1 = null;
list2 = null;
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));
list1 = null;
list2 = new ListNode(0, null);
console.log("mergeTwoLists(list1, list2) :=>", mergeTwoLists(list1, list2));

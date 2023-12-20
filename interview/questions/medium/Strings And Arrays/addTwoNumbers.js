<<<<<<< HEAD
/** Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let prevNode = new ListNode();
    let headNode = prevNode;
    let carry = 0;

    while (l1 || l2 || carry) {
        let v1 = v2 = 0;
        if (l1) {
            v1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            v2 = l2.val;
            l2 = l2.next;
        }
        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10)
        const digit = sum % 10;
        console.log(`${v1} + ${v2} + ${carry} = ${sum}`);
        console.log('digit :>> ', digit);
        let curNode = new ListNode(digit);
        prevNode.next = curNode;
        prevNode = curNode;
    }

    return headNode.next;
};

var addTwoNumbers2 = function (l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};
let l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(2);
let l2 = new ListNode(4);
l2.next = new ListNode(6);
l2.next.next = new ListNode(5);
// l1 = [0], l2 = [0] Output: [0]
// l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
// l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9] Output: [8,9,9,9,0,0,0,1]

function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

=======
/** Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let prevNode = new ListNode();
    let headNode = prevNode;
    let carry = 0;

    while (l1 || l2 || carry) {
        let v1 = v2 = 0;
        if (l1) {
            v1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            v2 = l2.val;
            l2 = l2.next;
        }
        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10)
        const digit = sum % 10;
        console.log(`${v1} + ${v2} + ${carry} = ${sum}`);
        console.log('digit :>> ', digit);
        let curNode = new ListNode(digit);
        prevNode.next = curNode;
        prevNode = curNode;
    }

    return headNode.next;
};

var addTwoNumbers2 = function (l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};
let l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(2);
let l2 = new ListNode(4);
l2.next = new ListNode(6);
l2.next.next = new ListNode(5);
// l1 = [0], l2 = [0] Output: [0]
// l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
// l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9] Output: [8,9,9,9,0,0,0,1]

function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

>>>>>>> origin/master
printList(addTwoNumbers(l1, l2));
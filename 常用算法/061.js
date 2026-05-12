/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || k == 0) return head;
    let cur = head;
    let count = 0;
    while (cur.next !== null) {
        count++;
        cur = cur.next;
    }
    count++;
    cur.next = head;

    let offset = count - k % count;

    for (let i = 0; i < offset; i++) {
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    return newHead;
};
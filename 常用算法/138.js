/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (head === null) {
        return null;
    }
    let map = new Map();
    let newhead = newTail = new _Node(head.val, null, null);
    map.set(head, newhead);
    while (head != null && head.next != null) {
        newTail.next = new _Node(head.next.val, null, null);
        map.set(head.next, newTail.next);
        newTail = newTail.next;
        head = head.next;
    }
    let cur = head;
    while (cur != null) {
        cur.random = map.get(cur.random);
        cur = cur.next;
    }
    return newhead;
};
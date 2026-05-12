/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) return head;

    let head_lt = new ListNode(0);
    let head_gt = new ListNode(0);
    let cur_gt = head_gt, cur_lt = head_lt;
    let cur_head = head;

    while (cur_head !== null) {
        if (cur_head.val < x) {
            cur_lt.next = cur_head;
            cur_lt = cur_lt.next;
        } else {
            cur_gt.next = cur_head;
            cur_gt = cur_gt.next;
        }
        console.log(cur_head.val, cur_lt.val, cur_gt.val)
        cur_head = cur_head.next;
    }
    cur_lt.next = head_gt.next;
    cur_gt.next = null;
    return head_lt.next;
};
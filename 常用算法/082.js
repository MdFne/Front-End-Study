/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return head;
    let newHair = new ListNode();
    let cur = newHair;
    while (true) {
        if (head === null) { break; }

        if (head.next !== null && head.val === head.next.val) {
            while (head.next !== null && head.val === head.next.val) {
                head = head.next;
            }
        } else {
            cur.next = head;
            cur = cur.next;
        }
        // console.log(cur.val);
        head = head.next;
    }
    cur.next = null;
    return newHair.next;
};

// var deleteDuplicates = function(head) {
//     if (!head) {
//         return head;
//     }

//     const dummy = new ListNode(0, head);

//     let cur = dummy;
//     while (cur.next && cur.next.next) {
//         if (cur.next.val === cur.next.next.val) {
//             const x = cur.next.val;
//             while (cur.next && cur.next.val === x) {
//                 cur.next = cur.next.next;
//             }
//         } else {
//             cur = cur.next;
//         }
//     }
//     return dummy.next;
// };
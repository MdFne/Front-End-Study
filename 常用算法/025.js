/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseKGroup = function (head, k) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy; // 上一段的尾节点

    // 循环反转每一组
    while (true) {
        // 找到当前组的头
        let curHead = pre.next;
        let ret = reversePartial(curHead, k);

        // 没有可反转的了，退出
        if (!ret[1]) break;

        // 拼接反转后的链表
        pre.next = ret[0];
        // 移动pre到当前组的尾节点
        pre = ret[1];
    }

    return dummy.next;
};

var reversePartial = function (head, count) {
    if (!head) return [head, null];

    // 1. 检查剩余节点是否足够 k 个
    let temp = head;
    for (let i = 0; i < count; i++) {
        if (!temp) return [head, null];
        temp = temp.next;
    }

    // 2. 标准迭代反转 k 个节点
    let prev = null;
    let curr = head;
    let tail = head;      // 反转后的尾节点（原头节点）
    for (let i = 0; i < count; i++) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // 3. ★ 关键：将尾节点连接到剩余链表
    tail.next = curr;    // curr 此时是第 k+1 个节点（即剩余链表的头）

    return [prev, tail];
};

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
// var reverseKGroup = function(head, k) {
//     let dummy = new ListNode(-1, head), prev = dummy;
    
//     while (true) {
//         // 检查剩余节点是否有 k 个，不足则返回
//         let last = prev;
//         for (let i = 0; i < k; i++) {
//             last = last.next;
//             if (last === null) {
//                 return dummy.next;
//             }
//         }

//         // 翻转 k 个节点（头插法，需要移动 k-1 次）
//         let curr = prev.next, next;
//         for (let i = 0; i < k - 1; i++) {
//             next = curr.next;
//             curr.next = next.next;
//             next.next = prev.next;
//             prev.next = next;
//         }
//         // 移动 prev 到当前组的尾部（curr 此时指向原组内第一个节点，即新的尾节点）
//         prev = curr;
//     }
// };
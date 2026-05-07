/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = null, tail = null;

    while (list1 !== null || list2 !== null) {
        let min;
        let node;

        // 处理其中一个链表为空的情况
        if (list1 === null) {
            node = new ListNode(list2.val);
            list2 = list2.next;
        }
        else if (list2 === null) {
            node = new ListNode(list1.val);
            list1 = list1.next;
        }
        // 两个都不为空，比较大小
        else if (list1.val <= list2.val) {
            node = new ListNode(list1.val);
            list1 = list1.next;
        }
        else {
            node = new ListNode(list2.val);
            list2 = list2.next;
        }

        // 添加到结果链表
        if (!head) {
            head = tail = node;
        } else {
            tail.next = node;
            tail = tail.next;
        }
    }

    return head;
};

// var mergeTwoLists = function(l1, l2) {
//     // 1️⃣ 递归终止条件：当其中一个链表为空时，直接返回另一个链表
//     if (l1 === null) {
//         return l2;  // l1 空了，剩下的 l2 直接接上
//     } else if (l2 === null) {
//         return l1;  // l2 空了，剩下的 l1 直接接上
//     }
//     // 2️⃣ 递归核心：比较当前两个头节点的值
//     else if (l1.val < l2.val) {
//         // l1 的当前节点更小，它应该是合并后的头节点
//         // l1.next 指向 剩余部分(l1.next 和 l2) 合并的结果
//         l1.next = mergeTwoLists(l1.next, l2);
//         // 返回 l1 作为这一层的头节点
//         return l1;
//     } else {
//         // l2 的当前节点更小（或相等），它应该是合并后的头节点
//         // l2.next 指向 剩余部分(l1 和 l2.next) 合并的结果
//         l2.next = mergeTwoLists(l1, l2.next);
//         // 返回 l2 作为这一层的头节点
//         return l2;
//     }
// };

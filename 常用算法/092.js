// var reverseBetween = function (head, left, right) {
//     if (left === right) return head;

//     // 1. 把链表节点全存入数组（保留你的思路）
//     const nodes = [];
//     let cur = head;
//     while (cur) {
//         nodes.push(cur);
//         cur = cur.next;
//     }

//     // 2. 标准哑节点：统一处理 left=1 的边界，无需判断
//     const dummy = new ListNode(0, head); // 0表示哑节点的值,head表示头节点
//     const start = left - 1; // 反转起始索引
//     const end = right - 1;   // 反转结束索引

//     // 3. 找到前后衔接节点
//     const preNode = start === 0 ? dummy : nodes[start - 1]; // 反转前的最后一个节点
//     const nextNode = nodes[end + 1] || null;               // 反转后的第一个节点

//     // 4. 直接逆序拼接区间（极简，无需循环反转）
//     preNode.next = nodes[end];
//     nodes[start].next = nextNode;
//     for (let i = end; i > start; i--) {
//         nodes[i].next = nodes[i - 1];
//     }

//     return dummy.next;
// };

var reverseBetween = function (head, left, right) {
    if (left === right) return head;
    let count = 0;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    let cur;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        let next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy.next;
}
/*
 * 链表节点
*/
var ListNode = function (key = 0, val = 0, next, pre) {
    this.key = key;
    this.val = val;
    this.next = next || null;
    this.pre = pre || null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.curSize = 0;
    this.cache = new Map();

    this.dummyHead = new ListNode(0);
    this.dummyTail = new ListNode(0);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.pre = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;
    let node = this.cache.get(key);

    node.pre.next = node.next;
    node.next.pre = node.pre;

    node.next = this.dummyHead.next;
    this.dummyHead.next.pre = node;
    node.pre = this.dummyHead;
    this.dummyHead.next = node;

    // console.log([...this.cache.keys()]);

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);
        node.val = value;
        this.get(key);
        return;
    } else {
        let node = new ListNode(key, value);
        this.cache.set(key, node);

        node.next = this.dummyHead.next;
        this.dummyHead.next.pre = node;
        this.dummyHead.next = node;
        node.pre = this.dummyHead;

        this.curSize++;
        if (this.curSize > this.capacity) {
            this.curSize--;
            this.cache.delete(this.dummyTail.pre.key);
            this.dummyTail.pre.pre.next = this.dummyTail;
            this.dummyTail.pre = this.dummyTail.pre.pre;
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
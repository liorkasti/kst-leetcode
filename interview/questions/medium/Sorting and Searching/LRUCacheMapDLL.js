/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map(); //this stores the whole array

    //boundaries for double LL
    this.head = {};
    this.tail = {};
    this.head.next = this.tail; //initialize double LL
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        //remove node
        node.prev.next = node.next
        node.next.prev = node.prev

        //add node to the tail
        this.tail.prev.next = node
        node.prev = this.tail.prev
        node.next = this.tail
        this.tail.prev = node

        return node.value
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        //remove node
        let prevNode = node.prev
        let nextNode = node.next
        prevNode.next = nextNode
        nextNode.prev = prevNode

        //add node to the tail
        let tailPrevNode = this.tail.prev
        tailPrevNode.next = node
        node.prev = tailPrevNode
        node.next = this.tail
        this.tail.prev = node

        node.value = value
        this.map.set(key, node)
        // console.log('map2', this.map)
    } else {
        let newNode = {
            key,
            value
        }
        this.map.set(key, newNode)
        //add node to the tail
        let tailPrevNode = this.tail.prev
        tailPrevNode.next = newNode
        newNode.prev = tailPrevNode
        newNode.next = this.tail
        this.tail.prev = newNode

        //if over size, remove the first
        // console.log(this.capacity)
        if (this.map.size > this.capacity) {
            // console.log('hihi')
            const firstNode = this.head.next
            this.map.delete(firstNode.key);

            const secondNode = firstNode.next

            this.head.next = secondNode
            secondNode.prev = this.head
        }

        // console.log('map', this.map)
    }
};

/* class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    put(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            const firstItem = this.map.keys().next().value;
            this.map.delete(firstItem);
        }
    }
} */

cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
// console.log('cache', cache)
cache.get(1);       // returns -1 (not found)
console.log(cache.get(1))
cache.get(3);       // returns 3
cache.get(4);       // returns 4
console.log('cache', cache)
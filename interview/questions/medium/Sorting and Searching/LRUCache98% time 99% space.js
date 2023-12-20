var LRUCache = function (capacity) {
    this.cache = new Map();
    this.size = 0;
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        console.log(cache)
        return this.cache.get(key);
    }
    else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    console.log('this.cache.size :>> ', this.cache.size);
    if (this.cache.has(key)) {
        if (this.cache.size <= 1) this.cache.set(key, value)
        else {
            this.cache.delete(key)
            this.cache.set(key, value)
            return;
        }
    }

    if (this.size === this.capacity) {
        const [firstKey] = this.cache.keys()
        console.log(firstKey)
        this.cache.delete(firstKey)
        this.cache.set(key, value)
    } else {
        this.cache.set(key, value)
        this.size++
    }
    console.log(cache)
};

cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
// console.log('cache', cache)
cache.get(1);       // returns -1 (not found)
// console.log(cache.get(1))
cache.get(3);       // returns 3
cache.get(4);       // returns 4
// console.log('cache', cache)


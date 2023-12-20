class LRUCache {
    private class LinkedNode {
        private int key;
        private int value;
        private LinkedNode before;
        private LinkedNode next;

        private LinkedNode() {}

        private LinkedNode(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    private LinkedNode[] cache;
    private LinkedNode head;
    private LinkedNode tail;
    private int capacity;
    private int cnt;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedNode[100001];
        this.head = this.tail = new LinkedNode();
    }

    public int get(int key) {
        var node = cache[key];
        if (node != null) {
            if (node.before != head) {
                if (node == tail)
                    tail = node.before;
                else
                    node.next.before = node.before;

                node.before.next = node.next;
                node.before = head;
                node.next = head.next;
                node.next.before = node;
                head.next = node;
            }
            return node.value;
        }
        return -1;
    }

    public void put(int key, int value) {
        if (get(key) == -1) {
            var node = new LinkedNode(key, value);
            node.before = head;
            if (head != tail) {
                node.next = head.next;
                node.next.before = node;
                if (cnt == capacity) {
                    cache[tail.key] = null;
                    tail = tail.before;
                    tail.next = null;
                } else 
                    cnt++;
            } else {
                tail = node;
                cnt = 1;
            }

            head.next = node;
            cache[key] = node;
        } else
            head.next.value = value;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
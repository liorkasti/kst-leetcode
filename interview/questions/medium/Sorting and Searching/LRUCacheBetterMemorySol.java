class LRUCache {
    Node[] map;
    Node head;
    Node tail;
    int capacity;
    int size;

    public LRUCache(int capacity) {
        this.map = new Node[10001];
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.capacity = capacity;
        this.size = 0;
    }
    
    public int get(int key) {
        if (this.map[key] == null) return -1;

        Node node = this.map[key];
        remove(node);
        add(node);

        return node.val;
    }
    
    public void put(int key, int value) {
        if (this.map[key] == null) {
            Node node = new Node(key, value);
            this.map[key] = node;
            add(node);
            this.size++;

            if (this.size > this.capacity) {
                Node temp = this.tail.prev;
                remove(temp);
                this.map[temp.key] = null;
            }

            return;
        }

        Node node = this.map[key];
        node.val = value;
        remove(node);
        add(node);
    }

    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void add(Node node) {
        Node temp = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = temp;
        temp.prev = node;
    }

    private class Node {
        private int key;
        private int val;
        private Node next;
        private Node prev;

        public Node() {

        }

        public Node(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
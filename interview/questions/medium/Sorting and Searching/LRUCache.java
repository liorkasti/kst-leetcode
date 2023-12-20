package interview.questions.medium;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

class LRUCache {

    class Node                      //LinkedList Node: <-key,val->
    {
        int key,val;
        Node prev, next;            
    }
    
    final Node head=new Node();             //head & tail node won't change so final
    final Node tail=new Node();
    Map<Integer,Node> h;                    //Cache = HashMap h (initialized later)
    int cache_capacity;                     //max size of cache
        
    public LRUCache(int capacity) {         //To Initialize new instance
        h=new HashMap(capacity);
        this.cache_capacity=capacity;
        head.next=tail;                     //head->tail & head<-tail
        tail.prev=head;
    }
    
    public void add(Node node)      //Extra function: To add to Head node of LinkedList
    {
        Node headnext=head.next;        //head->headnext, store headnext (temporary)
        head.next=node;                 //head->node & head<-node
        node.prev=head;                     
        node.next=headnext;             //node->headnext & node<-headnext
        headnext.prev=node;
        
    }
    
    public void remove(Node node)   //Extra function: To remove node from LinkedList
    {
        Node nodeprev=node.prev;             //nodeprev <- node -> nodenext
        Node nodenext=node.next;
        nodenext.prev=nodeprev;
        nodeprev.next=nodenext;         //nodeprev <-> nodenext
    }
    
    public int get(int key) {       //Get value of key if it exists, OR -1 if it doesn't 
    
        if(h.containsKey(key) )          //If it contains key, get the node for the key
        {
            Node node=h.get(key);
            remove(node);               //remove from current position & add to the head
            add(node);                  
            return node.val;
        }
        return -1;
    }
    
    public void put(int key, int value) {   
        //Put/Update value of key if it exists OR Add (key,val) to cache OR if cachesize>capacity remove LRU key
        
        if(h.containsKey(key))        //If it contains key, get the node for the key
        {
            Node node=h.get(key);     //Key already exists in h, so just change val of node
            remove(node);             //& move to front of cache
            node.val=value;
            add(node);
        }
        else                        //If key doesn't exist in h, then add new node but .. 
        {
            if(h.size()==cache_capacity)    //If full capacity reached, remove from tail
            {
                h.remove(tail.prev.key);    //ALWAYS Remove from h first, then remove node
                remove(tail.prev);
            }
        
            Node newnode=new Node();        //Add new node after taking care of capacity
            newnode.key=key;
            newnode.val=value;
            h.put(key,newnode);             
            add(newnode);
        }
        
    }
 
      // Driver code
    public static void main(String[] args)
    {
        LRUCache cache = new LRUCache(4);
        cache.put(1, 1);  
        cache.put(2, 2);  
        cache.get(1);       // returns 1  
        cache.put(3, 3);    // evicts key 2  
        cache.get(2);       // returns -1 (not found)  
        cache.put(4, 4);    // evicts key 1  
        cache.get(1);       // returns -1 (not found)  
        cache.get(3);       // returns 3  
        cache.get(4);       // returns 4
    }
    }
    
    /**
     * Your LRUCache object will be instantiated and called as such:
     * LRUCache obj = new LRUCache(capacity);
     * int param_1 = obj.get(key);
     * obj.put(key,value);
     */
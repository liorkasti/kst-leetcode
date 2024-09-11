package interview.questions;

import java.util.HashMap;

/* Data Structure that performs set(), get(), setAll() in O(1)
https://stackoverflow.com/questions/72591504/data-structure-that-performs-set-get-setall-in-o1
Implement a Data Structure that capable of getting an array of numbers and have init([array]), setAll(value), getIndex(index), and setIndex(index,value) functions usage all with O(1) complexity
setAll(value)->setAll(5)->[5,5,5,5,5]
getIndex(index)->value->getIndex(2)=>3
setIndex(index,value)->setIndex(0,12)->[12,...] 
*/

public class advanceArray {
    boolean setAllStatus = false;
    HashMap<Integer, Integer> hasMap = new HashMap<>();
    int setAllValue = 0;
    int count = 0;
    public void set(int key, int value) {
        hasMap.put(key, value);
    }
    public int get(int key) {
        if (setAllStatus) {
            if (hasMap.get(key) != null) {
                if (count == hasMap.size()) {
                    return setAllValue;
                } else {
                    // do something
                }
            } else {
                throw new NullPointerException();
            }
        } else {
            if (hasMap.get(key) == null) {
                throw new NullPointerException();
            } else {
                return hasMap.get(key);
            }
        }
        return key;
    }
    public void setAll(int value) {
        setAllStatus = true;
        setAllValue = value;
        count = hasMap.size();
    }
    public static void main(String[] args) {
        advanceArray m = new advanceArray();
        m.set(1, 4);
        m.set(4, 5);
        System.out.println(m.get(4)); // 5
        m.setAll(6);
        System.out.println(m.get(4)); // 6
        m.set(8, 7);
        System.out.println(m.get(8)); // 7
    }
}

// public class SingleValueMap<K, V> {
//     private Map<K, V> map = new HashMap<>();
//     private V commonValue;
    
//     public void setAll(V newValue) {
//         this.commonValue = newValue;
//     }
    
//     public void add(K key) {
//         map.put(key, commonValue);
//     }
    
//     public void add(K key, V newValue) {
//         setAll(newValue);
//         map.put(key, commonValue);
//     }
    
//     public V get(K key) {
//         if (!map.containsKey(key)) throw new NoSuchElementException();
        
//         return commonValue;
//     }
// }

// public class SingleValueSet<K, V> {
//     private Set<K> set = new HashSet<>();
//     private V commonValue;
    
//     public void setAll(V newValue) {
//         this.commonValue = newValue;
//     }
    
//     public void add(K key) {
//         set.add(key);
//     }
    
//     public void add(K key, V newValue) {
//         setAll(newValue);
//         set.add(key);
//     }
    
//     public V get(K key) {
//         if (!set.contains(key)) throw new NoSuchElementException();
        
//         return commonValue;
//     }
// }

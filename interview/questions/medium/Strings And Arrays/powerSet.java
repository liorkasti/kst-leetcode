package interview.questions.medium;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class powerSet {
	
	public static void main(String[] args) {
		
		 Set<Integer> mySet = new HashSet<Integer>();
		 mySet.add(1);
		 mySet.add(2);
		 mySet.add(3);

		 System.out.println(powerSet(mySet));
	}
	
	public static <T> Set<Set<T>> powerSet(Set<T> originalSet) {
		// List<Integer> targetList = new ArrayList<>();
		// originalSet.forEach(x -> targetList.add(targetList));
		// System.out.println(originalSet);
	    Set<Set<T>> sets = new HashSet<Set<T>>();
	    if (originalSet.isEmpty()) {
	        sets.add(new HashSet<T>());
	        return sets;
	    }
	    List<T> list = new ArrayList<T>(originalSet);
	    T head = list.get(0);
	    Set<T> rest = new HashSet<T>(list.subList(1, list.size())); 
	    for (Set<T> set : powerSet(rest)) {
	        Set<T> newSet = new HashSet<T>();
	        newSet.add(head);
	        newSet.addAll(set);
	        sets.add(newSet);
	        sets.add(set);
	    }       
	    return sets;
	}  
}

package interview.questions.backtracking;
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

		 Set<String> myStr = new HashSet<String>();
		 myStr.add("a");
		 myStr.add("b");
		 myStr.add("a");

		 System.out.println(powerSet(myStr));
		 System.out.println(powerSet(mySet));
	}
	
	public static <T> Set<Set<T>> powerSet(Set<T> originalSet) {
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
	        newSet.addAll(set);//addAll() method is used to add all the elements of the set passed as parameter to the new set.
	        sets.add(newSet);//adds all the sets in the rest set to the new set and adds the new set to the sets set.
	        sets.add(set);//add original set as well since we want the power set of the original set as well.
	    }
	    return sets;
	}  
}

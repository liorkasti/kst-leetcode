package interview.questions.backtracking;
import java.util.ArrayList;
import java.util.List;

public class ParenthesisGenerator {

	public static void main(String[] args) {

		generateParenthesis(3);
		System.out.println(generateParenthesis2(3));
	}
	
    public static List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        helper(res,n,0,"");
        System.out.println("" + res.size());
        return res;
    }
    
    private static void helper(List<String> res, int left, int right, String s) {
        if (left == 0 && right == 0) {
            res.add(s);
            System.out.println("" + s);
            return;
        }
        if (left > 0) helper(res,left - 1, right + 1, s + "(");
        if (right > 0) helper(res,left, right - 1, s + ")");
    }

/*
 Question: Write a program that takes as input a number n in and returns all the strings with n matched pairs of parens.

The code: https://github.com/bephrem1/backtobac...


Examples:

n = 1
[ "()" ]

n = 2
[ "(())", "()()" ]

n = 3
[ "((()))","(()())","(())()","()(())","()()()" ]


Approach 1 (Brute Force Then Validate)

Generate all (2 ^ (2n)) possible parenthese strings and then validate each for being balanced.

If n = 2 then the string length will be 2 times that since all open parentheses are matched by closed parentheses.

This lower bounds our time complexity.

Even if we restrict the enumeration to just sets with an equal number of left and right parentheses we will have choose(2k, k) strings to consider for validation.


Approach 2 (Directed Backtracking)

The 3 Keys To Backtracking

Our Choice:
Place "(" or ")"
Whether we place a left or right paren at a certain decision point in our recursion.

Our Constraints:
We cannot close until we open.
My count of left opens matters.
We can't place a right paren unless we have left parens to match against.

Our Goal:
n^2 placement
Place all k left and all k right parens.


The Key

At each point of constructing the string of length 2k we make a choice.

We can place a "(" and recurse or we can place a ")" and recurse.

But we can't just do that placement, we need 2 critical pieces of information.

The amount of left parens left to place.
The amount of right parens left to place.

We have 2 critical rules at each placement step.

We can place a left parentheses if we have more than 0 left to place.

We can only place a right parentheses if there are left parentheses that we can match against.

We know this is the case when we have less left parentheses to place than right parentheses to place.

Once we establish these constraints on our branching we know that when we have 0 of both parens to place that we are done, we have an answer in our base case.
 
 */
	public static List<String> generateParenthesis2(int numPairs) {
	  List<String> result = new ArrayList<>();
	  directedGenerateBalancedParentheses(numPairs, numPairs, "", result); // kick off the recursion
	  return result;
	}

	private static void directedGenerateBalancedParentheses(int numLeftParensNeeded , int numRightParensNeeded,
	                                                        String parenStringInProgress, List<String> result) {

	  /*
	    The recursion has bottomed out.
	    We have used all left and right parens necessary within constraints up
	    to this point. Therefore, the answer we add will be a valid paren string.
	    
	    We can add this answer and then backtrack so the previous call can exhaust
	    more possibilities and express more answers...and then return to its caller,
	    etc. etc.
	    Yeah...this is what backtracking is all about.
	  */
	  if (numLeftParensNeeded == 0 && numRightParensNeeded == 0) {
	    result.add(parenStringInProgress);
	    return;
	  }

	  /*
	    At each frame of the recursion we have 2 things we can do:
	    1.) Insert a left parenthesis
	    2.) Insert a right parenthesis
	    These represent all of the possibilities of paths we can take from this
	    respective call. The path that we can take all depends on the state coming
	    into this call.
	  */

	  /*
	    Can we insert a left parenthesis? Only if we have lefts remaining to insert
	    at this point in the recursion
	  */
	  if (numLeftParensNeeded > 0) {

	    /*
	      numLeftParensNeeded - 1 ->       We are using a left paren
	      numRightParensNeeded ->          We did not use a right paren
	      parenStringInProgress + "(" ->   We append a left paren to the string in progress
	      result ->                        Just pass the result list along for the next call to use
	    */
	    directedGenerateBalancedParentheses(numLeftParensNeeded - 1, numRightParensNeeded,
	                                        parenStringInProgress + "(", result);
	  }

	  /*
	    Can we insert a right parenthesis? Only if the number of left parens needed
	    is less than then number of right parens needed.
	    
	    This means that there are open left parenthesis to close OTHERWISE WE CANNOT
	    USE A RIGHT TO CLOSE ANYTHING. We would lose balance.
	  */
	  if (numLeftParensNeeded < numRightParensNeeded) {

	    /*
	      numLeftParensNeeded ->           We did not use a left paren
	      numRightParensNeeded - 1 ->      We used a right paren
	      parenStringInProgress + ")" ->   We append a right paren to the string in progress
	      result ->                        Just pass the result list along for the next call to use
	    */
	    directedGenerateBalancedParentheses(numLeftParensNeeded, numRightParensNeeded - 1,
	                                          parenStringInProgress + ")", result);
	  }

	}
}
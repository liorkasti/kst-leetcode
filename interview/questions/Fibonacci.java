package leetcode.interview.questions;

public class Fibonacci<E> {

	// Solution 1: Iterative
	// Time complexity: O(n)
	// Space complexity: O(1)
	public static int Fibonacci(int n) {
		if (n <= 1)
			return n;

		int sum, first = 0, second = 1;

		while (n-- > 1) {
			sum = first + second;
			first = second;
			second = sum;
		}
		return second;
	}

	// Solution 2: Recursive
	// Time complexity: O(2^n)
	// T(n) = T(n-1) + T(n-2)is an exponential time
	// Space complexity: O(n)
	// space for recursive function call stack
    public static int fib(int N)
    {
        if(N == 0) return 0;
        else if(N <= 2)
            return 1;
        else
            return fib(N - 1) + fib(N - 2);
    }

    
	public static int countWays(int n) {
		if (n < 0) {
			return 0;
		} else if (n == 0) {
			return 1;
		} else {
			return countWays(n - 1) + countWays(n - 2);
		}
	}
	
	
	public static void main(String[] args) {

		System.out.println(fib(8));
		
		int n = 5;
		int ways = countWays(n);
		System.out.println(ways);

	}
}

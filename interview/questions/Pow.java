package leetcode.interview.questions;

public class Pow {

/*	Implement pow(x, n), which calculates x raised to the power n (xn).
	Input: 2.00000, 10
	Output: 1024.00000
	Input: 2.10000, 3
	Output: 9.26100
	Input: 2.00000, -2
	Output: 0.25000*/
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(myPow(2.00000,10));
	}
	
    public static double myPow(double x, int n) {
        
		return n >= 0 ? pow(x, n, 1.0) : 1 / (x * pow(x, -n-1, 1.0));
	}
    
    public static double pow(double x, int n) {
        
		return n >= 0 ? pow(x, n, 1.0) : 1 / (x * pow(x, -n-1, 1.0));
	}

	private static double pow(double x, int n, double r) {
		if (n == 0) return r;
		return n % 2 == 0 ? pow(x*x, n>>1, r) : pow(x, n-1, r*x);
	}

}

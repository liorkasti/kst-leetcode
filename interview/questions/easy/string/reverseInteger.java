package interview.questions.easy.string;

public class reverseInteger {

	public static void main(String[] args) {

		int num1 = 123, num2 = -123, num3 = 120;
		
		System.out.println(reverse(num2));
		
		System.out.println(reverseIntBitwise(num1,Integer.bitCount(num1)));
}

	/*
		Given a 32-bit signed integer, reverse digits of an integer.
		
		Example 1:
		
		Input: 123
		Output: 321
		Example 2:
		
		Input: -123
		Output: -321
		Example 3:
		
		Input: 120
		Output: 21
	*/
	public static int reverse(int x) {
		
        if (x == 0)
			return 0;
        
		long rev = 0, sign = 1;
		
		if(x < 0) {
			x*= -1;
			sign = -1;
		}
		
		while(x != 0) {
			rev = rev * 10 + x % 10;
			x /= 10;
            if (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE)
			    return 0;
		}
		
		return (int) (sign*rev);
	}

    public static int reverser(int given){

    	return Integer.reverse(given);

  }
    
	public static int reverseIntBitwise(int value, int numBitsInt) {
        int i = 0, rev = 0, bit;

        while (i++ < numBitsInt) {

            bit = value & 1;

            value = value >> 1;

            rev = rev ^ bit;

            if (i < numBitsInt)
                rev = rev << 1;
        }
        return rev;
        
        
//		long rev = 0, sign = 1;
//		
//		if(x < 0) {
//			x*= -1;
//			sign = -1;
//		}
//		
//		while(x != 0) {
//			rev <<= 1;
//			rev |= x & 1;
//			x >>= 1;
//            if (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE)
//			    return 0;
//		}
//		
//		return (int) (sign*rev);
  }
}

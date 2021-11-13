package leetcode.interview.questions;

import java.awt.List;
import java.util.ArrayList;
import java.util.Iterator;

public class PascalTriangle<E>{

	public static void triangle(int maxRows) {
		int r, num;
		for (int i = 0; i <= maxRows; i++) {
			num = 1;
			r = i + 1;
			for (int col = 0; col <= i; col++) {
				if (col > 0) {
					num = num * (r - col) / col;
				}
				System.out.print(num + " ");
			}
			System.out.println();
		}
	}

	// Pascal function
	public static void printPascal(int n) {
		for (int line = 1; line <= n + 1; line++) {

			int spaces;

			int C = 1;// used to represent C(line, i)
			for (int i = 1; i <= line; i++) {
				// todo:
				for (spaces = n + 1; spaces < 0; spaces--) {
					System.out.print(" ");
				}

				// The first value in a line is always 1
				System.out.print(C + " ");

				C = C * (line - i) / i;
			}
			System.out.println();
		}
	}

	static void recurrcencePascal(int n) {

		// Iterate through every line
		// and print entries in it
		for (int line = 0; line <= n; line++) {
			// Every line has number of
			// integers equal to line number
			for (int i = 0; i <= line; i++)
				System.out.print(binomialCoeff(line, i) + " ");

			System.out.println();
		}
	}

	// Link for details of this function
	// https://www.geeksforgeeks.org/space-and-time-efficient-binomial-coefficient/
	static int binomialCoeff(int n, int k) {
		int res = 1;

		if (k > n - k)
			k = n - k;

		for (int i = 0; i < k; ++i) {
			res *= (n - i);
			res /= (i + 1);
		}
		return res;
	}

	//mine recursion - somthings missing though!
/*    public List<List<Integer>> generate(int numRows) {
        
        if(numRows < 1) 
            return null;
     
        List<List<Integer>> result = new ArrayList<List<Integer>>();

        for (int line = 0; line <= numRows; line++) {
           List<Integer> row = new ArrayList<Integer>();

		    for (int i = 0; i <= line; i++){
		int col = generatePascal(numRows,numRows);
		row.add(col);
		}        
           result.add(generatePascal(numRows,numRows));   
        }
        
        return result; 
    }
    
    private static int generatePascal(int row, int column){
        
        if(row == 1 || column == row) {
            return null;   
        }

        return generatePascal(row - 1, column - 1) + generatePascal(row - 1, column);
    }*/
    
/*    public static List<Integer> getRow(int rowIndex) {
        if (rowIndex == 0) return Arrays.asList(1);
        List<Integer> previousList = getRow(rowIndex - 1);
        List<Integer> thisList = new ArrayList<>();
        for (int i =0; i < previousList.size(); i++) {
            if (i == 0) thisList.add(1);
            if (i > 0) thisList.add(previousList.get(i) + previousList.get(i-1));
            if (i == previousList.size() -1) thisList.add(1);
        }
        return thisList;
    }*/
    
	public static void main(String[] args) {

		 recurrcencePascal(4);

		/*
		 * int a, num;
		 * 
		 * for (int i = 0; i <= 4; i++) { num = 1; a = i + 1;
		 * 
		 * for (int j = 4; j > 0; j--) { if (j > i) System.out.print(" "); }
		 * 
		 * for (int j = 0; j <= i; j++) { if (j > 0) num = num * (a - j) / j;
		 * 
		 * System.out.print(num + " "); } System.out.println(); }
		 */
	}
}

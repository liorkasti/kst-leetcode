package interview.questions.easy.array;

import java.util.Arrays;
import java.util.Collections;

public class rotateImage {

	private static int [][] image = {
			  {1,2,3},
			  {4,5,6},
			  {7,8,9}
	};
	
	public static void main(String[] args) {

		rotate2(image);	
		printImage(image);

	}

	/*
	You are given an n x n 2D matrix representing an image.
	Rotate the image by 90 degrees (clockwise).
	Note:
	You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
	Example 1:
	Given input matrix = 
	[
	  [1,2,3],
	  [4,5,6],
	  [7,8,9]
	],
	rotate the input matrix in-place such that it becomes:
	[
	  [7,4,1],
	  [8,5,2],
	  [9,6,3]
	]
	Example 2:
	Given input matrix =
	[
	  [ 5, 1, 9,11],
	  [ 2, 4, 8,10],
	  [13, 3, 6, 7],
	  [15,14,12,16]
	], 
	rotate the input matrix in-place such that it becomes:
	[
	  [15,13, 2, 5],
	  [14, 3, 4, 1],
	  [12, 6, 8, 9],
	  [16, 7,10,11]
	]
	*/
    public static void rotate(int[][] matrix) {
        
    	int n = matrix.length;
		//transpose:
    	for (int i = 0; i < n; i++) {
			for (int j = i; j < n; j++) {
				int temp = matrix[i][j];
				matrix[i][j] = matrix[j][i];
				matrix[j][i] = temp;
			}			
		}
    	
    	//reverse each row:
//    	Collections.reverse(Arrays.asList(matrix));
    	for (int i = 0; i < n; i++) {
    		int start = 0;
    		int end = n-1;
    		while(start < end) {
    			int temp = matrix[i][start];
    			matrix[i][start] = matrix[i][end];
    			matrix[i][end] = temp;
    			start++;
    			end--;
    		}
    	}
    }
    
    public static void rotate2(int[][] matrix) {
        
    	int n = matrix.length;
    	for (int i = 0; i < n/2; i++) {
			for (int j = i; j < n - i - 1; j++) {
				int top = matrix[i][j];
				//move left to top
				matrix[i][j] = matrix[n - 1 - j][i];
				//move bottom to left
				matrix[n - 1 - j][i] = matrix[n - i - 1][n - j - 1];
				//move right to bottom
				matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
				//move top to right
				matrix[j][n - i - 1] = top;
			}			
		}
    }
	// Print image
	public static void printImage(int[][] matrix) {
		for (int i = 0; i < matrix.length; ++i) {
			for (int j = 0; j < matrix[i].length; ++j) {
				System.out.print(matrix[i][j] + " ");
			}
			System.out.println();
		}
	}
}

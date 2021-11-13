package leetcode.interview.questions.trees_and_graphs;
import java.awt.Point;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Scanner;

/**
 * @author Lior Kastenbaum
 * מטלה קורס - C, C++ & RT Embedded Programming
 */
public class longestIncreasingPath {
	
	public static void main(String[] args) {
		
		int matrix[][] = {	
				{ 9,9,4 }, 
				{ 6,6,8 }, 
 				{ 2,1,1 }};
		
		
		System.out.println("The matrix given:"); 
		print(matrix);
		System.out.println("The longest increasing path is " + longestIncreasingPath(matrix));
	}
	
/*
	Given an integer matrix, find the length of the longest increasing path.
	From each cell, you can either move to four directions: left, right, up or 
	down. You may NOT move diagonally or move outside of the boundary
	(i.e. wrap-around is not allowed).
	Example 1:
	Input: nums = 
	[
	  [9,9,4],
	  [6,6,8],
	  [2,1,1]
	] 
	Output: 4 
	Explanation: The longest increasing path is [1, 2, 6, 9].
	Example 2:
	Input: nums = 
	[
	  [3,4,5],
	  [3,2,6],
	  [2,2,1]
	] 
	Output: 4 
	Explanation:  * DFS + Memoization  
	Traverse all points in matrix, use every point as starting point to do dfs traversal. DFS function returns max increasing 
	path after comparing four max return distance from four directions. 	
	@param cache: cache[i][j] represents longest increasing path starts from point matrix[i][j]
	@param prev: previous value used by DFS traversal, to compare whether current value is greater than previous value
	  */
	public static final int[][] dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

	public static int longestIncreasingPath(int[][] matrix) {
	    if(matrix.length == 0) return 0;
	    int m = matrix.length, n = matrix[0].length;
	    int[][] cache = new int[m][n];
	    // initialize max distance as 1 since the path includes starting point itself
	    int max = 1;
	    for(int i = 0; i < m; i++) {
	        for(int j = 0; j < n; j++) {
	            int len = dfs(matrix, i, j, m, n, cache);
	            max = Math.max(max, len);
//	    		print(cache);
	        }
	    }   
	    System.out.println("The cache: ");
	    print(cache);
	    return max;
	}

	public static int dfs(int[][] matrix, int i, int j, int m, int n, int[][] cache) {
	    if(cache[i][j] != 0) return cache[i][j];
	    int max = 1;
	    for(int[] dir: dirs) {
	        int x = i + dir[0], y = j + dir[1];
	        // if next point is out of bound or next point current point is greater than or equal to next point
	        if(x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) continue;
	        // if next point is a valid point, add curLen by 1 and continue DFS traversal
	        int len = 1 + dfs(matrix, x, y, m, n, cache);
	        max = Math.max(max, len);
	    }
	    // update max increasing path value starting from current point in cache
	    cache[i][j] = max;
	    return max;
	}
	
	private static void print(int[][] map) {
		for (int i = 0; i < map.length; i++) {
			for (int j = 0; j < map[i].length; j++) {
				System.out.print(" " + map[i][j] + " ");
			}
			System.out.println();
		}
	}	
}
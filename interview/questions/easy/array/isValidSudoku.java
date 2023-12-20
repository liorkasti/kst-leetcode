package interview.questions.easy.array;

import java.util.HashSet;
import java.util.Set;

public class isValidSudoku {

	public static void main(String[] args) {

		char[][] board = {
				{'.','.','4','.','.','.','6','3','.'},
				{'.','.','.','.','.','.','.','.','.'},
				{'5','.','.','.','.','.','.','9','.'},
				{'.','.','.','5','6','.','.','.','.'},
				{'4','.','3','.','.','.','.','.','1'},
				{'.','.','.','7','.','.','.','.','.'},
				{'.','.','.','5','.','.','.','.','.'},
				{'.','.','.','.','.','.','.','.','.'},
				{'.','.','.','.','.','.','.','.','.'}
			};
		
		char[][] validBoard = {
				{'5','3','.','.','7','.','.','.','.'},
				{'6','.','.','1','9','5','.','.','.'},
				{'.','9','8','.','.','.','.','6','.'},
				{'8','.','.','.','6','.','.','.','3'},
				{'4','.','.','8','.','3','.','.','1'},
				{'7','.','.','.','2','.','.','.','6'},
				{'.','6','.','.','.','.','2','8','.'},
				{'.','.','.','4','1','9','.','.','5'},
				{'.','.','.','.','8','.','.','7','9'}
			};
		printSudoku(board);	
		System.out.println(isValidSudoku(board));
		System.out.println();

		printSudoku(validBoard);
		System.out.println(isValidSudoku(validBoard));
	}

	/*
	 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
	 * validated according to the following rules:
	 * 
	 * Each row must contain the digits 1-9 without repetition. Each column must
	 * contain the digits 1-9 without repetition. Each of the 9 3x3 sub-boxes of the
	 * grid must contain the digits 1-9 without repetition. Note:
	 * 
	 * A Sudoku board (partially filled) could be valid but is not necessarily
	 * solvable. Only the filled cells need to be validated according to the
	 * mentioned rules. The given board contain only digits 1-9 and the character
	 * '.'. The given board size is always 9x9.
	 */
	/*
	 * Using HashSet add() Method in Java The Java.util.HashSet.add() method in Java
	 * HashSet is used to add a specific element into a HashSet. This method will
	 * add the element only if the specified element is not present in the HashSet
	 * else the function will return False if the element is already present in the
	 * HashSet. URL: https://www.geeksforgeeks.org/hashset-add-method-in-java/
	 */

	public static boolean isValidSudoku(char[][] board) {

		Set seen = new HashSet();
		for (int i = 0; i < board.length; ++i) {
			for (int j = 0; j < board[i].length; ++j) {
				if (board[i][j] != '.') {
					String b = "(" + board[i][j] + ")";
					if (!seen.add(b + i) || !seen.add(j + b) || !seen.add(i / 3 + b + j / 3))
						return false;
				}
			}
		}
		return true;
	}

	/*
	 * Edit: Just occurred to me that we can also make it really clear and
	 * self-explaining. I'm loving it.
	 */
	public static boolean isValidSudoku2(char[][] board) {
		Set seen = new HashSet();
		for (int i = 0; i < board.length; ++i) {
			for (int j = 0; j < board[i].length; ++j) {
				char number = board[i][j];
				if (number != '.')
					if (!seen.add(number + " in row " + i) || !seen.add(number + " in column " + j)
							|| !seen.add(number + " in block " + i / 3 + "-" + j / 3))
						return false;
			}
		}
		return true;
	}

	// Print sudoku
	public static void printSudoku(char[][] board) {
		for (int i = 0; i < board.length; ++i) {
			for (int j = 0; j < board[i].length; ++j) {
				System.out.print(board[i][j] + " ");
			}
			System.out.println();
		}
	}
}

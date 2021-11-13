package leetcode.interview.questions.backtracking;

public class WordSearch {
	private static char board[][] = { { 'A', 'B', 'C', 'E' }, { 'S', 'F', 'C', 'S' }, { 'A', 'D', 'E', 'E' } };

	public static void main(String[] args) {

		System.out.println(exist(board, "ABCCED"));
		System.out.println(exist(board, "SEE"));
		System.out.println(exist(board, "ABCB"));
		
	}
	
	/*
	 * Given a 2D board and a word, find if the word exists in the grid.
	 * 
	 * The word can be constructed from letters of sequentially adjacent cell,
	 * where "adjacent" cells are those horizontally or vertically neighboring.
	 * The same letter cell may not be used more than once.
	 * 
	 * Example:
	 * 
	 * board = [ ['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E'] ]
	 * 
	 * Given word = "ABCCED", return true. Given word = "SEE", return true.
	 * Given word = "ABCB", return false.
	 * 
	 * Time Complexity - O(m * n * l) n - number of rows in board. m - number of
	 * cols in board. l - length of the word to be matched.
	 */
    public static boolean exist(char[][] board, String word) {
        // at each board[i][j] start a dfs traversal and try to match the given word.
        // dfs traverses top, left right and bottom cells.
        for(int i = 0 ; i < board.length; ++i) {
            for(int j = 0; j < board[0].length; ++j) {
                if(dfs(board, i, j, word, 0))
                    return true;
            }
        }
        return false;
    }
    
    // board[i][j] - current cell, under investigation.
    // off - starting index of unmatched part of the word.
    private static boolean dfs(char[][] board, int i, int j, String word, int off) {
        
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) // check out of bounce
            return false;
        
        char c = board[i][j]; // char record
        
        if(c == '#') // check visited
            return false;
        
        if(c != word.charAt(off)) // mismatch
            return false;
        
        // Success! if we have reached the end of the word, then we found the word.
        if(off == word.length() - 1)
            return true;
        
        // mark node as visited
        board[i][j] = '#';
        boolean result = 
        	dfs(board, i + 1, j, word, off + 1) || 
            dfs(board, i - 1, j, word, off + 1) || 
            dfs(board, i, j + 1, word, off + 1) || 
            dfs(board, i, j - 1, word, off + 1);
        
        board[i][j] = c; // unmark vistied 
        
        return result;
    }

}

// MORE SOLUTIONS:
	/*
	// Sol 2: (short)
	public static boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                if(exist(board, i, j, word, 0)) return true;
            }
        }
        return false;
    }

    private static boolean exist(char[][] board, int x, int y, String word, int offset) {
        if(offset >= word.length()) return true;
        if(x < 0 || x >= board.length || y < 0 || y >= board[0].length) return false;
        char current = word.charAt(offset++), checker = board[x][y];
        if (current == checker) {        
            board[x][y] = '#';
            boolean res = 
	            exist(board, x + 1, y, word, offset) || 
	            exist(board, x - 1, y, word, offset) ||
	            exist(board, x, y + 1, word, offset) || 
	            exist(board, x, y - 1, word, offset);
            
            board[x][y] = current;
            return res;
        }
        return false;
    }

	 //MY SOL:
/*
	 	
	private static boolean inRange(char[][] board, int i, int j) {
		return (board[i][j] != '#' && i < board.length - 1 && j < board[0].length - 1);// Path out of range
	}
	
	private static boolean validPath(char[][] board, int i, int j) {
		return (board[i][j] != '#' || board[i][j] < board[i + 1][j] || board[i][j] < board[i][j + 1]
				|| board[i][j] < board[i - 1][j] || board[i][j] < board[i][j - 1]);
	}

 	public static boolean exist(char[][] board, String word) {

		if (word.length() == 0)
			return false;
	
		boolean answer = false;
	
		String checker = "";
	
		answer = wordSearch(board, word, checker, 0, 0, answer);
	
		return answer ? true : false;
 	}

	private static boolean wordSearch(char[][] board, String word, String checker, int i, int j, boolean answer) {
	
		if (word == checker) {
			return true;
		} else {
	
			checker += board[i][j];
	
			board[i][j] = '#';
	
			if (inRange(board, i + 1, j) && validPath(board, i, j))
				answer = wordSearch(board, word, checker, i + 1, j, answer);
	
			if (inRange(board, i, j + 1) && validPath(board, i, j))
				answer = wordSearch(board, word, checker, i, j + 1, answer);
	
			if (inRange(board, i - 1, j) && validPath(board, i, j))
				answer = wordSearch(board, word, checker, i - 1, j, answer);
	
			if (inRange(board, i, j - 1) && validPath(board, i, j))
				answer = wordSearch(board, word, checker, i, j - 1, answer);
		}
	
	    board[i][j] = c; // unmark vistied 

		return false;
	}

	 */
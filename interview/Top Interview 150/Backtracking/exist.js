/* 79. Word Search
Medium
https://leetcode.com/problems/word-search/
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) =>{
    const [row,col]=[board.length,board[0].length];

    const bcs = (x,y,bc)=>{
        if(bc === word.length)return true;
        if(x<0||y<0||x>=row||y>=col||word.charAt(bc++)!==board[x][y])return false;
        const visited = board[x][y];
        board[x][y] = "#";
        console.log(board);
        const result = bcs(x + 1, y, bc) || bcs(x - 1, y, bc) || bcs(x, y + 1, bc) || bcs(x, y - 1, bc);
        board[x][y] = visited;
        console.log(x,y,bc);
        return result
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
              if(bcs(i,j,0))return true;
        }
        
    }

    return false
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
word = "ABCCED"//Output: true
// word = "ABCB"//Output: false

console.log(exist(board, word));

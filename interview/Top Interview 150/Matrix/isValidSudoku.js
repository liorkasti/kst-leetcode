/* 36. Valid Sudoku[Medium]
https://leetcode.com/problems/valid-sudoku/?envType=study-plan-v2&envId=top-interview-150
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
Accepted
1,418,282
Submissions
2,391,268
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  let seen = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        let b = "(" + board[i][j] + ")";
        console.log(
          board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
            3 * (i % 3) + (j % 3)
          ]
        );
        if (
          !seen.add(b + i) ||
          !seen.add(j + b) ||
          !seen.add(board[i / 3 + b + j / 3])
        )
          return false;
      }
    }
  }
  return true;
};

// const isValidSudoku = (board) => {
//   for (let i = 0; i < 9; i++) {
//     let [row, col, box] = [new Set(), new Set(), new Set()];

//     for (let j = 0; j < 9; j++) {
//       let [_row, _col, _box] = [
//         board[i][j],
//         board[j][i],
//         board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)],
//       ];
//       if (row.has(_row) || col.has(_col) || box.has(_box)) {
//         return false;
//       } else {
//         _row != "." && row.add(_row);
//         _col != "." && col.add(_col);
//         _box != "." && box.add(_box);
//       }
//     }
//   }
//   return true;
// };

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ],
  board2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];

console.log(isValidSudoku(board2));

// const isValidSudoku = (board) => {
//   for (let i = 0; i < 9; i++) {
//     var [row, col, box] = [new Set(), new Set(), new Set()];

//     for (let j = 0; j < 9; j++) {
//       return (
//         isValid(board[i][j], row) ||
//         isValid(board[j][i], col) ||
//         isValid(
//           board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
//             3 * (i % 3) + (j % 3)
//           ],
//           box
//         )
//       );
//     }
//   }
// };

// const isValid = (val, set) => {
//   if (set.has(val)) {
//     return false;
//   } else {
//     val != "." && set.add(val);
//   }
//   return true;
// };

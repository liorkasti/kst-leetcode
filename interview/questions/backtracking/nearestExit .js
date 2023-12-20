/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const queue = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = '+';
    const rows = maze.length - 1;
    const cols = maze[0].length - 1;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length) {
        console.log('queue :>> ', queue);
        let [row, col, distance] = queue.shift();
        console.log('row, col, distance :>> ', row, col, distance);
        if (distance && (row === 0 || col === 0 || row === rows || col === cols)) {
            return distance;
        }
        
        for (let [x, y] of directions) {
            let curRow = row + x;
            let curCol = col + y;
            let rowInbound = curRow >= 0 && curRow <= rows;
            let colInbound = curCol >= 0 && curCol <= cols;
            
            if (!rowInbound || !colInbound
               || maze[curRow][curCol] === '+') {
                continue;
            }
            
            queue.push([curRow, curCol, distance + 1]);
            maze[curRow][curCol] = '+'
        }
    }
    
    return -1;
};

maze = [["+","+",".","+"],
        [".",".",".","+"],
        ["+","+","+","."]], entrance = [1,2]

console.log(nearestExit(maze, entrance));

// time complexity O(2^(n+m))  
// space complexity is O(nm) 

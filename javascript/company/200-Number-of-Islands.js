/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let islands = 0;

    // Recursively checking each corner. Adds to the stack of functions being called.
    // Like the Magic stack!
    const explore = function(y, x) {
        grid[y][x] = 2;

        if(grid[y-1] && grid[y-1][x] === "1") {
            explore(y-1, x);
        }

        if(grid[y+1] && grid[y+1][x] === "1") {
            explore(y+1, x);
        }

        if(grid[y][x-1] && grid[y][x-1] === "1") {
            explore(y, x-1);
        }

        if(grid[y][x+1] && grid[y][x+1] === "1") {
            explore(y, x+1);
        }
    }

    for(let y = 0; y < grid.length; y++) {
        let row = grid[y];
        for(let x = 0; x < row.length; x++) {
            if(grid[y][x] === "1") {
                islands++;
                explore(y, x);
            }
        }
    }
    return islands;
};

/*
Find a 1.
When we do increase the island count.
Then flip that 1 to 2.
Check all four corners to that one for 1's and flip to 2's.
    loop 1 gives y
    loop 2 gives x
        [0,0] => [x, y+1], [x, y-1], [x+1, y], [x-1, y];
            When checking if one of these has a 1 then need call the checker function recursively to check all corners of that.
Move to a space connected and do the same.
*/
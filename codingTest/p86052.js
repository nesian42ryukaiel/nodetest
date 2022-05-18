/**
 * RangeError: Maximum call stack size exceeded
 */

function solution(grid) {
  const answer = [];
  const tracker = new Map();
  const ref = {
    cycle: 0,
  };
  const spin = (dir, com) => {
    if (com === "L") {
      if (dir === 0) return 3;
      return dir - 1;
    } else if (com === "R") {
      if (dir === 3) return 0;
      return dir + 1;
    } else {
      return dir;
    }
  };
  const move = (y, x, dir, len) => {
    if (tracker.has([y, x, dir])) {
      if (answer.length === ref.cycle) {
        answer.push(len);
        // ref.cycle++;
      }
      return;
    } else {
      if (len === 0) ref.cycle++;
      tracker.set([y, x, dir], ref.cycle);
    }
    switch (dir) {
      case 0:
        if (y === 0) {
          move(
            grid.length - 1,
            x,
            spin(dir, grid[grid.length - 1][x]),
            len + 1
          );
        } else {
          move(y - 1, x, spin(dir, grid[grid.length - 1][x]), len + 1);
        }
        break;
      case 1:
        if (x === grid[y].length - 1) {
          move(y, 0, spin(dir, grid[y][0]), len + 1);
        } else {
          move(y, x + 1, spin(dir, grid[y][x + 1]), len + 1);
        }
        break;
      case 2:
        if (y === grid.length - 1) {
          move(0, x, spin(dir, grid[0][x]), len + 1);
        } else {
          move(y + 1, x, spin(dir, grid[y + 1][x]), len + 1);
        }
        break;
      case 3:
        if (x === 0) {
          move(
            y,
            grid[y].length - 1,
            spin(dir, grid[y][grid[y].length - 1]),
            len + 1
          );
        } else {
          move(y, x - 1, spin(dir, grid[y][x - 1]), len + 1);
        }
        break;
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      move(i, j, 0, 0);
      move(i, j, 1, 0);
      move(i, j, 2, 0);
      move(i, j, 3, 0);
    }
  }
  return answer;
}

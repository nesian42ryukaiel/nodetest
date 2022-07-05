const setBoard = (w, h) => {
  const board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
};

const plantMines = (board, mines, first) => {
  const nb = [...board];
  const by = nb.length,
    bx = nb[0].length;
  const minebox = new Set();
  const dir = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  if (board.length * board[0].length <= mines) {
    console.log("Invalid mine total!");
    return;
  }
  while (minebox.size < mines) {
    let mine = [Math.floor(Math.random() * by), Math.floor(Math.random() * bx)];
    if (mine[0] !== first[0] || mine[1] !== first[1]) {
      minebox.add(mine);
    }
  }
  console.log(minebox.size, "mines /", mines, "intended");
  for (let mine of minebox) {
    console.log(mine);
    nb[mine[0]][mine[1]] = -9;
  }
  for (let i = 0; i < by; i++) {
    for (let j = 0; j < bx; j++) {
      if (nb[i][j] < 0) {
        for (let k = 0; k < 8; k++) {
          if (
            i + dir[k][0] >= 0 &&
            i + dir[k][0] < by &&
            j + dir[k][1] >= 0 &&
            j + dir[k][1] < bx
          ) {
            if (nb[i + dir[k][0]][j + dir[k][1]] >= 0) nb[i][j]++;
          }
        }
      }
    }
  }
  return nb;
};

const b = setBoard(7, 7);
const c = plantMines(b, 7, [3, 3]);
console.log("----");
// for (let row of b) console.log(row.length);
console.log(c);

const setBoard = (w, h) => {
  if (w > 255 || h > 255) {
    console.log("Board is too large! A 2x2 board was created instead.");
    return [
      [0, 0],
      [0, 0],
    ];
  }
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

const setMinefield = (board, mines, first) => {
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
    return; // or mines = board.length * board[0].length - 1;
  }
  while (minebox.size < mines) {
    let mine = [Math.floor(Math.random() * by), Math.floor(Math.random() * bx)];
    if (mine[0] !== first[0] || mine[1] !== first[1]) {
      let crypt =
        mine[0].toString(16).padStart(2, 0) +
        mine[1].toString(16).padStart(2, 0);
      minebox.add(crypt);
    }
  }
  // console.log(minebox.size, "mines /", mines, "intended");
  for (let crypt of minebox) {
    // console.log(crypt);
    let mine = [
      parseInt(crypt.substr(0, 2), 16),
      parseInt(crypt.substr(2, 2), 16),
    ];
    nb[mine[0]][mine[1]] = -1;
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
            if (nb[i + dir[k][0]][j + dir[k][1]] >= 0)
              nb[i + dir[k][0]][j + dir[k][1]]++;
          }
        }
      }
    }
  }
  for (let i = 0; i < by; i++) {
    for (let j = 0; j < bx; j++) {
      if (nb[i][j] < 0) {
        nb[i][j] = "B"; // this part is for demonstration
      }
    }
  }
  return nb;
};

const b = setBoard(9, 9);
const mf = setMinefield(b, 13, [9, 9]);
console.log("----");
for (let row of mf) console.log(row.toString());
// console.log(c);

/**
 * A more elegant way of making sure the first click won't kill you
 * would be prepping a reserve mine and then swapping out positions
 * if the first click had a mine there.
 * ...or to follow Windows 8, 9 reserve mines...
 */

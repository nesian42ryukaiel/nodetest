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

const b = setBoard(20, 10);
console.log("----");
// for (let row of b) console.log(row.length);
b[3][1] = 3;
console.log(b);

function solution_hindex(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) {
      answer = i + 1;
    } else {
      break;
    }
  }
  return answer;
}

/* function solution(places) {
  const answer = [];
  for (const place of places) {
      let res = 1; let cont = true;
      for (let i = 0; cont && i < 5; i++) {
          for (let j = 0; cont && j < 5; j++) {
              if (place[i][j] === 'P') {
                  if (i > 0 && place[i-1][j] === 'P') {
                      cont = false; break;
                  }
                  if (i < 4 && place[i+1][j] === 'P') {
                      cont = false; break;
                  }
                  if (j > 0 && place[i][j-1] === 'P') {
                      cont = false; break;
                  }
                  if (j < 4 && place[i][j+1] === 'P') {
                      cont = false; break;
                  }
                  if (i > 1 && place[i-2][j] === 'P') {
                      if (place[i-1][j] !== 'X') cont = false; break;
                  }
                  if (i < 3 && place[i+2][j] === 'P') {
                      if (place[i+1][j] !== 'X') cont = false; break;
                  }
                  if (j > 1 && place[i][j-2] === 'P') {
                      if (place[i][j-1] !== 'X') cont = false; break;
                  }
                  if (j < 3 && place[i][j+2] === 'P') {
                      if (place[i][j+1] !== 'X') cont = false; break;
                  }
                  if (i > 0 && j > 0 && place[i-1][j-1] === 'P') {
                      if (place[i-1][j] !== 'X' || place[i][j-1] !== 'X') cont = false; break;
                  }
                  if (i < 4 && j > 0 && place[i+1][j-1] === 'P') {
                      if (place[i+1][j] !== 'X' || place[i][j-1] !== 'X') cont = false; break;
                  }
                  if (i > 0 && j < 4 && place[i-1][j+1] === 'P') {
                      if (place[i-1][j] !== 'X' || place[i][j+1] !== 'X') cont = false; break;
                  }
                  if (i < 4 && j < 4 && place[i+1][j+1] === 'P') {
                      if (place[i+1][j] !== 'X' || place[i][j+1] !== 'X') cont = false; break;
                  }
              }
          }
          if (!cont) break;
      }
      if (!cont) res = 0;
      answer.push(res);
  }
  return answer;
} */

function solution_cut(w, h) {
  const getgcd = (a, b) => {
    while (b > 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };
  let answer = w * h;
  let minus = 0;
  let b = 0;
  let s = 0;
  const g = getgcd(w, h);
  if (w > h) {
    b = w / g;
    s = h / g;
  } else {
    b = h / g;
    s = w / g;
  }
  for (let i = 0; i < s; i++) {
    minus += Math.ceil(((i + 1) * b) / s) - Math.floor((i * b) / s);
  }
  answer -= minus * g;
  return answer;
}

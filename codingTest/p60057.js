function solution(s) {
  var answer = 1001;
  const comp = (s, n) => {
    let answer = "";
    const S = s.length;
    const box = [];
    for (let i = 0; i < S; i += n) {
      box.push(s.substring(i, i + n));
    }
    let j = 0;
    while (j < box.length) {
      let temp = box[j];
      let pref = 1;
      for (let k = j + 1; k < box.length; k++) {
        if (box[k] == temp) {
          pref++;
          j++;
        } else {
          break;
        }
      }
      if (pref > 1) answer += pref.toString(10);
      answer += temp;
      j++;
    }
    return answer;
  };
  for (let i = 1; i <= s.length; i++) {
    let temp = comp(s, i);
    if (answer > temp.length) answer = temp.length;
  }
  return answer;
}

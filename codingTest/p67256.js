function solution(numbers, hand) {
  let answer = "";
  const ref = {
    lf: 10,
    rf: 11,
    2: [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4],
    5: [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3],
    8: [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2],
    0: [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1],
  };
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      ref.lf = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      ref.rf = numbers[i];
    } else {
      if (ref[numbers[i]][ref.lf] < ref[numbers[i]][ref.rf]) {
        answer += "L";
        ref.lf = numbers[i];
      } else if (ref[numbers[i]][ref.lf] > ref[numbers[i]][ref.rf]) {
        answer += "R";
        ref.rf = numbers[i];
      } else {
        if (hand === "left") {
          answer += "L";
          ref.lf = numbers[i];
        } else {
          answer += "R";
          ref.rf = numbers[i];
        }
      }
    }
  }
  return answer;
}

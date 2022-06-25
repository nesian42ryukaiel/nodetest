function factorial(n) {
  if (n % 1 !== 0 || n < 0) {
    throw "Wrong factorial input!";
  }
  if (n === 0 || n === 1) return 1;
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer *= i;
  }
  return answer;
}

module.exports = factorial;

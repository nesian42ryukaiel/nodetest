function fibonacci(n) {
  if (n % 1 !== 0 || n <= 0) {
    throw "Wrong fibonacci input!";
  }
  if (n === 1 || n === 2) return 1;
  let left = 1,
    mid = 1,
    right = 0,
    count = 3;
  while (count <= n) {
    right = left + mid;
    left = mid;
    mid = right;
    count++;
  }
  return mid;
}

module.exports = fibonacci;

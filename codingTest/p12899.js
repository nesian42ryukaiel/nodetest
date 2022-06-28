function sixtyFive(n) {
  let answer = "";
  const haszero = (d) => {
    for (let digit of d) {
      if (digit == 0) return true;
    }
    return false;
  };
  const digits = [];
  while (n > 0) {
    let temp = n % 3;
    digits.push(temp);
    n = Math.floor(n / 3);
  }
  while (haszero(digits)) {
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] == 0) {
        for (let j = i + 1; j < digits.length; j++) {
          if (digits[j] != 0) {
            digits[j - 1] += 3;
            digits[j]--;
            break;
          }
        }
      }
    }
  }
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] == 3) digits[i] = 4;
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 0) answer += digits[i].toString(10);
  }
  return answer;
}

function fail(n) {
  const answer = {
    value: "",
  };
  const reverse = (s) => {
    return s.split("").reverse().join("");
  };
  const totri = (n) => {
    let result = "";
    while (n > 0) {
      result += n % 3;
      n = Math.trunc(n / 3);
    }
    console.log(result);
    return result;
  };
  const otfr = (s) => {
    let result = s;
    let i = 0;
    while (i < s.length) {
      if (result[i] == "0") {
        result[i] = "4";
        while (i < s.length - 1 && result[i + 1] == "0") {
          i++;
          result[i] = "2";
        }
        if (i < s.length - 1) {
          if (result[i + 1] == "1") {
            result[i + 1] = "0";
          } else if (result[i + 1] == "2") {
            result[i + 1] = "1";
          }
        }
      }
      i++;
    }
    console.log(result);
    if (result[result.length - 1] == "0") {
      return result.slice(0, -1);
    } else {
      return result;
    }
  };
  answer.value = reverse(otfr(totri(n)));
  return answer.value;
}

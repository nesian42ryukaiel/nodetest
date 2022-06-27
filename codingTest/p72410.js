function solution(new_id) {
  let answer = "";
  const a = new_id.toLowerCase();
  const b = a.replace(/[^a-z0-9\-\_\.]/g, "");
  const c = b.replace(/[\.]{2,}/g, ".");
  let d1 = c[0] === "." ? 1 : 0;
  let d2 = c[c.length - 1] === "." ? c.length - 1 : c.length;
  const d = c.slice(d1, d2);
  const e = d.length === 0 ? "a" : d;
  const f1 = e.length >= 16 ? e.slice(0, 15) : e;
  const f2 = f1[f1.length - 1] === "." ? f1.slice(0, f1.length - 1) : f1;
  answer += f2;
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }
  console.log(a, "| lowercase");
  console.log(b, "| remove uneligible");
  console.log(c, "| remove ...'s");
  console.log(d1, c.length, d2, d.length === 0 ? '""' : d, "| remove edge .'s");
  console.log(e, "| fill empty string with 'a'");
  console.log(f1, f2, "| taper size and end .");
  console.log(answer, "| answer");
  return answer;
}

function evenBetterSolution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

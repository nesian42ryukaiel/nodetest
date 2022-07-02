// test call stack from
// https://velog.io/@roeniss/JS-stack-frame-%EA%B3%A0%EC%B0%B0

function loop(vis, res, nodes, cur) {
  try {
    return 1 + loop(vis, res, nodes, cur + 1);
  } catch (e) {
    return 1;
  }
}
function loop2(res, nodes, cur) {
  try {
    return 1 + loop2(res, nodes, cur + 1);
  } catch (e) {
    return 1;
  }
}
const a = {};
const b = [];
const c = {};
const loopCnt = loop(a, b, c, 1);
const loopCnt2 = loop2(b, c, 1);
console.log(loopCnt, loopCnt2);

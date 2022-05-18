function solution(info, query) {
  // currently not good for stress tests
  const answer = {
    value: [],
    ip: [],
    qp: [],
  };
  const npi = (s) => Number.parseInt(s);
  for (let i = 0; i < info.length; i++) {
    let parse = info[i].split(" ");
    parse[4] = npi(parse[4]);
    answer.ip.push(parse);
  }
  for (let q = 0; q < query.length; q++) {
    let pq = query[q].split(" and ");
    let pl = pq[3].split(" ");
    pq.push(npi(pl[1]));
    pq[3] = pl[0];
    answer.qp.push(pq);
  }
  for (let q = 0; q < answer.qp.length; q++) {
    let cond = 0;
    for (let i = 0; i < answer.ip.length; i++) {
      let elig = true;
      for (let k = 0; k < 5; k++) {
        if (answer.qp[q][k] === "-") continue;
        if (k < 4) {
          if (answer.ip[i][k] !== answer.qp[q][k]) {
            elig = false;
            break;
          }
        } else {
          if (answer.ip[i][k] < answer.qp[q][k]) {
            elig = false;
            break;
          }
        }
      }
      if (elig) cond++;
    }
    answer.value.push(cond);
  }
  return answer.value;
}

// function solution(info, query) {
//   const answer = {
//     value: [],
//     ip: [],
//   };
//   for (let i = 0; i < info.length; i++) {
//     let parse = info[i].split(" ");
//     parse[4] = Number.parseInt(parse[4]);
//     answer.ip.push(parse);
//   }
//   for (let q = 0; q < query.length; q++) {
//     const pq = query[q].split(" and ");
//     const pl = pq[3].split(" ");
//     pq.push(Number.parseInt(pl[1]));
//     pq[3] = pl[0];
//     let condition = 0;
//     for (let i = 0; i < answer.ip.length; i++) {
//       let pass = true;
//       for (let j = 0; j < 5; j++) {
//         if (pq[j] !== "-" && pq[j] !== answer.ip[i][j]) {
//           if (j === 4 && pq[j] <= answer.ip[i][j]) {
//             //
//           } else {
//             pass = false;
//             break;
//           }
//         }
//       }
//       if (pass) condition++;
//     }
//     answer.value.push(condition);
//   }
//   return answer.value;
// }

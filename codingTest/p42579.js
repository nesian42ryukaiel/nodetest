function solution(genres, plays) {
  const answer = [];
  const hash = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (!hash.has(genres[i])) {
      hash.set(genres[i], [0]);
    }
    if (hash.get(genres[i]).length === 1) {
      hash.get(genres[i]).push([i, plays[i]]);
      hash.get(genres[i])[0] += hash.get(genres[i])[1][1];
      // console.log(hash.get(genres[i])[0])
    } else if (hash.get(genres[i]).length === 2) {
      if (hash.get(genres[i])[1][1] < plays[i]) {
        let temp = hash.get(genres[i]).pop();
        hash.get(genres[i])[0] -= temp[1];
        hash.get(genres[i]).push([i, plays[i]]);
        hash.get(genres[i])[0] += hash.get(genres[i])[1][1];
        hash.get(genres[i]).push(temp);
        hash.get(genres[i])[0] += hash.get(genres[i])[2][1];
      } else {
        hash.get(genres[i]).push([i, plays[i]]);
        hash.get(genres[i])[0] += hash.get(genres[i])[2][1];
      }
    } else {
      if (
        hash.get(genres[i])[1][1] < plays[i] &&
        hash.get(genres[i])[2][1] < plays[i]
      ) {
        hash.get(genres[i])[0] -= hash.get(genres[i]).pop()[1];
        let temp = hash.get(genres[i]).pop();
        hash.get(genres[i])[0] -= temp[1];
        hash.get(genres[i]).push([i, plays[i]]);
        hash.get(genres[i])[0] += hash.get(genres[i])[1][1];
        hash.get(genres[i]).push(temp);
        hash.get(genres[i])[0] += hash.get(genres[i])[2][1];
      } else if (hash.get(genres[i])[2][1] < plays[i]) {
        hash.get(genres[i])[0] -= hash.get(genres[i]).pop()[1];
        hash.get(genres[i]).push([i, plays[i]]);
        hash.get(genres[i])[0] += hash.get(genres[i])[2][1];
      } else {
        //
      }
    }
  }
  const ahash = [...hash.values()];
  ahash.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < ahash.length; i++) {
    for (let j = 1; j <= 2; j++) {
      answer.push(ahash[i][j][0]);
    }
  }
  return answer;
}

// function solution(genres, plays) {
//     const answer = [];
//     const hash = new Map();
//     for (let i = 0; i < genres.length; i++) {
//         if (!hash.has(genres[i])) {
//             hash.set(genres[i], []);
//         }
//         if (hash.get(genres[i]).length === 0) {
//             hash.get(genres[i]).push([i, plays[i]]);
//         } else if (hash.get(genres[i]).length === 1) {
//             if (hash.get(genres[i])[0][1] < plays[i]) {
//                 let temp = hash.get(genres[i]).pop();
//                 hash.get(genres[i]).push([i, plays[i]]);
//                 hash.get(genres[i]).push(temp);
//             } else {
//                 hash.get(genres[i]).push([i, plays[i]]);
//             }
//         } else {
//             if (hash.get(genres[i])[0][1] < plays[i] && hash.get(genres[i])[1][1] < plays[i]) {
//                 hash.get(genres[i]).pop()[1];
//                 let temp = hash.get(genres[i]).pop();
//                 hash.get(genres[i]).push([i, plays[i]]);
//                 hash.get(genres[i]).push(temp);
//             } else if (hash.get(genres[i])[1][1] < plays[i]) {
//                 hash.get(genres[i]).push([i, plays[i]]);
//             } else {
//                 continue;
//             }
//         }
//     }
//     const ahash = [...hash.values()]
//     for (let i = 0; i < ahash.length; i++) {
//         ahash[i].push(ahash[i][0][1] + ahash[i][1][1])
//     }
//     ahash.sort((a, b) => (b[2] - a[2]));
//     for (let i = 0; i < ahash.length; i++) {
//         for (let j = 0; j < 2; j++) {
//             answer.push(ahash[i][j][0]);
//         }
//     }
//     return answer;
// }

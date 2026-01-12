const fs = require("fs"); 
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number); 

// 배열 A를 정렬한다
// 각 질문 X에 대해 이진 탐색
// 찾으면 1, 못 찾으면 0

const N = input[0];
const A = input.slice(1, N + 1).sort((a, b) => a - b);
const M = input[N + 1];
const X = input.slice(N + 2, N + 2 + M);
const results = [];

for (let i = 0; i < M; i++) {
  let left = 0;
  let right = N - 1;
  let found = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (A[mid] === X[i]) {
      found = 1;
      break;

    } else if (A[mid] < X[i]) {
      left = mid + 1;

    } else {
      right = mid - 1;
    }
  }

  results.push(found);
}

console.log(results.join("\n"));    

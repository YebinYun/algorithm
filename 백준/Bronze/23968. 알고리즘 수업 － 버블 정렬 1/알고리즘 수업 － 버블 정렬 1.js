const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);;

// 버블 정렬을 실제로 수행하면서,
// K번째로 발생하는 “교환”에서 바뀐 두 수를 찾아라.

// 배열 A를 입력 그대로 유지하면서,
// 문제에 주어진 버블 정렬 의사 코드를 그대로 실행한다.
// 교환이 발생할 때마다 카운트를 증가시킨다.
// 카운트가 K가 되는 순간, 그때 교환되는 두 값을 기록하고, 종료한다.

const N = input[0];
const K = input[1];
const A = input.slice(2);

let count = 0;
let result = -1;

// 뒤에서부터 범위를 줄이는 방식
for (let last = N - 1; last >= 1; last--) {
  for (let i = 0; i < last; i++) {
    if (A[i] > A[i + 1]) {
      count++;

      // K번째 교환 순간
      if (count === K) {
        const x = A[i];
        const y = A[i + 1];
        result = `${Math.min(x, y)} ${Math.max(x, y)}`;
        break;
      }

      // 실제 교환 수행
      [A[i], A[i + 1]] = [A[i + 1], A[i]];
    }
  }

  // K번째 교환을 찾았으면 전체 종료
  if (result !== -1) break;
}

console.log(result);

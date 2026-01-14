const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 병합 정렬을 그대로 구현
// A[i] = tmp[t]가 실행될 때마다 count 증가
// count === K가 되는 순간 저장되는 값을 기록
// 정렬이 끝날 때까지 못 찾으면 -1 출력

const N = input[0];
const K = input[1];
const A = input.slice(2);

const tmp = new Array(N);
let count = 0;
let result = -1;
let found = false;

// top-down 병합 정렬
function merge_sort(p, r) {
  if (p >= r || found) return;
  const q = Math.floor((p + r) / 2);
  merge_sort(p, q); // 전반부 정렬
  merge_sort(q + 1, r); // 후반부 정렬
  merge(p, q, r); // 병합
}

function merge(p, q, r) {
  let i = p; // 왼쪽 부분 배열 시작
  let j = q + 1; // 오른쪽 부분 배열 시작
  let t = p; // tmp에 저장할 위치

  // 두 배열 병합
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) tmp[t++] = A[i++];
    else tmp[t++] = A[j++];
  }

  // 왼쪽 배열이 남은 경우
  while (i <= q) {
    tmp[t++] = A[i++];
  }

  // 오른쪽 배열이 남은 경우
  while (j <= r) {
    tmp[t++] = A[j++];
  }

  // tmp → A로 복사 (저장 횟수 카운트 지점)
  for (let k = p; k <= r; k++) {
    A[k] = tmp[k];
    count++;

    if (count === K) {
      result = A[k];
      found = true; // 더 이상 진행할 필요 없음
      return;
    }
  }
}

merge_sort(0, N - 1);

console.log(result);

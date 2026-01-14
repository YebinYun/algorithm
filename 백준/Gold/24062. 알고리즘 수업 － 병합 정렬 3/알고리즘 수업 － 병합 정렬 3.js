const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// top-down 병합 정렬을 구현
// 초기 상태의 A도 비교 대상에 포함
// A[p..r]에 값이 다시 저장될 때마다 전체 배열 A가 배열 B와 같은지 비교
// 한 번이라도 같아지면 → 1, 끝까지 비교했는데도 한 번도 같아지지 않으면 → 0 출력

const N = input[0];
const A = input.slice(1, 1 + N);
const B = input.slice(1 + N, 1 + N * 2);

const tmp = new Array(N);
let count = 0;
let result = 0;
let found = false;

// A와 B가 다른 위치의 개수
for (let i = 0; i < N; i++) {
  if (A[i] !== B[i]) count++;
}
// 처음부터 같으면 1 출력 후 종료
if (count === 0) {
  console.log(1);
  process.exit(0);
}

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

  // tmp의 값을 A에 하나씩 복사하며 상태 변화 추적
  for (let k = p; k <= r; k++) {
    // 복사 전: 현재 위치가 B와 달랐다면 차이 감소
    if (A[k] !== B[k]) count--;

    // 저장 (병합 정렬에서 실제 값이 A에 기록되는 시점)
    A[k] = tmp[k];

    // 복사 후: 새 값이 B와 다르면 차이 증가
    if (A[k] !== B[k]) count++;

    // 저장 직후 A와 B가 완전히 같아졌는지 확인
    if (count === 0) {
      result = 1;
      found = true;
      return;
    }
  }
}

merge_sort(0, N - 1);

console.log(result);

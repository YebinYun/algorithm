const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 삽입 정렬을 실제로 수행하면서,
// 배열 A에 값이 “저장되는 순간”을 하나씩 세고,
// K번째로 저장된 값을 출력하라.

// 배열 A를 입력 그대로 유지하면서,
// 삽입 정렬 의사 코드를 한 줄도 바꾸지 않고 구현.
// 배열에 값이 저장될 때마다 카운트 증가시킨다.
// 카운트가 K가 되는 순간, 그때 저장된 값을 기록하고, 종료한다.
// 끝까지 수행해도 K번째 저장이 없으면 -1을 출력.

const N = input[0];
const K = input[1];
const A = input.slice(2);

let count = 0;
let result = -1;

for (let i = 1; i < N; i++) {
  const key = A[i]; // 삽입할 대상
  let j = i - 1; // key 왼쪽의 마지막 원소 인덱스

  if (count === K) break;
    
  // key보다 큰 값들을 오른쪽으로 한 칸씩 밀어내는 과정
  while (j >= 0 && A[j] > key) {
    // A[j]의 값을 한 칸 오른쪽(A[j+1])으로 이동
    // → 배열 A에 값이 저장되므로 "저장 1회" 발생
    A[j + 1] = A[j];
    count++;

    if (count === K) {
      result = A[j + 1];
      break;
    }
    j--; // 왼쪽으로 한 칸 이동
  }

  // key가 원래 위치(i)에 그대로 있는 경우는 저장이 발생하지 않음
  // key가 이동하는 경우에만 저장이 발생
  if (j + 1 !== i) {
    // key의 값을 A[j+1] 위치에 저장
    // → 배열 A에 값이 저장되므로 "저장 1회" 발생
    A[j + 1] = key;
    count++;

    if (count === K) {
      result = A[j + 1];
      break;
    }
  }
}

console.log(result);

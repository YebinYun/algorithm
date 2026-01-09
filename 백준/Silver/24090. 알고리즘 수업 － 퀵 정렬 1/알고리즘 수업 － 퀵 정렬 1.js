const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = input[0];
const K = input[1];
const A = input.slice(2);

let count = 0;
let result = -1; 

/**
 * 퀵 정렬 (재귀)
 * p: 현재 정렬할 구간의 시작 인덱스
 * r: 현재 정렬할 구간의 끝 인덱스
 */
function quickSort(p, r) {
  if (p >= r || result !== -1) return;

  // 분할 수행
  const q = partition(p, r);
  // pivot 기준 왼쪽 부분 배열 정렬
  quickSort(p, q - 1);
  // pivot 기준 오른쪽 부분 배열 정렬
  quickSort(q + 1, r);
}

/**
 * 로무토 파티션
 * pivot을 기준으로 배열을 분할하고
 * 교환이 발생할 때마다 count를 증가시킨다
 */
function partition(p, r) {
  const pivot = A[r];   // pivot은 항상 구간의 마지막 원소
  let i = p - 1;        // pivot 이하 원소들의 마지막 위치

  // pivot 이전 원소들을 순회
  for (let j = p; j < r; j++) {
    // pivot 이하라면 왼쪽 영역으로 이동
    if (A[j] <= pivot) {
      i++;

      // 교환 전 값을 기록
      const x = A[i];
      const y = A[j];

      // i와 j 위치의 값을 교환
      [A[i], A[j]] = [A[j], A[i]];
      count++;

      // K번째 교환이라면 결과 저장
      if (count === K) {
        result = `${Math.min(x, y)} ${Math.max(x, y)}`;
        return i + 1;
      }
    }
  }

  // pivot을 자신의 최종 위치로 이동
  if (i + 1 !== r) {
    const x = A[i + 1];
    const y = A[r];

    [A[i + 1], A[r]] = [A[r], A[i + 1]];
    count++;

    if (count === K) {
      result = `${Math.min(x, y)} ${Math.max(x, y)}`;
    }
  }

  // pivot의 최종 위치 반환
  return i + 1;
}

quickSort(0, N - 1);

console.log(result);

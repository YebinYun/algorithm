const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 입력이 0이면 출력
// 현재 힙에서 최댓값을 출력
// 힙이 비어 있으면 0 출력

const N = input[0]; 
const x = input.slice(1); 

let heap = []; // 최대 힙 
let result = []; // 출력 결과

// 힙 내부에서 두 값을 교환하는 함수
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 명령을 하나씩 처리
for (let i = 0; i < N; i++) {
  // 출력 명령
  if (x[i] === 0) {
    // 힙이 비어 있으면 0 출력
    if (heap.length === 0) {
      result.push(0);
      continue;
    }

    // 루트(최댓값) 출력
    result.push(heap[0]);

    // 마지막 값을 루트로 이동
    const lastValue = heap.pop();
    if (heap.length === 0) continue;

    heap[0] = lastValue;

    // 아래로 내려가며 최대 힙 유지
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let targetIndex = currentIndex;

      // 더 큰 자식이 있으면 교환 대상 지정
      if (
        leftChildIndex < heap.length &&
        heap[leftChildIndex] > heap[targetIndex]
      ) {
        targetIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heap.length &&
        heap[rightChildIndex] > heap[targetIndex]
      ) {
        targetIndex = rightChildIndex;
      }

      // 내려갈 필요가 없으면 종료
      if (targetIndex === currentIndex) break;

      swap(heap, currentIndex, targetIndex);
      currentIndex = targetIndex;
    }
  }
  // 삽입 명령
  else {
    // 값을 힙의 마지막에 추가
    heap.push(x[i]);
    let currentIndex = heap.length - 1;

    // 위로 올라가며 최대 힙 유지
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (heap[parentIndex] >= heap[currentIndex]) break;

      swap(heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
} 

console.log(result.join("\n"));

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 입력이 0이면 출력
// 절댓값이 가장 작은 값 출력
// 절댓값이 같으면 실제 값이 작은 것(음수) 출력
// 힙이 비어 있으면 0 출력

const N = input[0];
const x = input.slice(1);

let heap = [];
let result = [];

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function isBetter(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  if (absA !== absB) return absA < absB;

  return a < b;
}

for (let i = 0; i < N; i++) {
  if (x[i] === 0) {
    if (heap.length === 0) {
      result.push(0);
      continue;
    }
      
    result.push(heap[0]);

    swap(heap, 0, heap.length - 1);
    heap.pop();

    let currentIndex = 0;

    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let targetIndex = currentIndex;

      if (
        leftChildIndex < heap.length &&
        isBetter(heap[leftChildIndex], heap[targetIndex])
      ) {
        targetIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heap.length &&
        isBetter(heap[rightChildIndex], heap[targetIndex])
      ) {
        targetIndex = rightChildIndex;
      }

      if (targetIndex === currentIndex) break;

      swap(heap, currentIndex, targetIndex);
      currentIndex = targetIndex;
    }
  } else {
    heap.push(x[i]);
    let currentIndex = heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (isBetter(heap[parentIndex], heap[currentIndex])) break;

      swap(heap, currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }
}

console.log(result.join("\n"));

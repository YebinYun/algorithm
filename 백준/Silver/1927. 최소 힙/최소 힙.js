const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 입력이 0이면 출력
// 현재 힙에 있는 값 중 최소값 출력
// 힙이 비어 있는데 출력 명령(0)이 들어오면 0을 출력

const N = input[0];
const x = input.slice(1);

let heap = [];
let result = [];

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

for (let i = 0; i < N; i++) {
  if (x[i] === 0) {
    if (heap.length === 0) {
      result.push(0);
      continue;
    }

    result.push(heap[0]);

    const lastValue = heap.pop();
    if (heap.length === 0) continue;

    heap[0] = lastValue;

    let currentIndex = 0;

    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let targetIndex = currentIndex;

      if (
        leftChildIndex < heap.length &&
        heap[leftChildIndex] < heap[targetIndex]
      ) {
        targetIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heap.length &&
        heap[rightChildIndex] < heap[targetIndex]
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

      if (heap[parentIndex] <= heap[currentIndex]) break;

      swap(heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
}

console.log(result.join("\n"));

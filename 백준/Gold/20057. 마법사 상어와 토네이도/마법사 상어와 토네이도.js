const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 1번 줄: 격자의 크기 N
// 2번 줄 ~ N+1번 줄: 격자에 있는 모래의 양 A[r][c]
const N = input[0];
const A = [];
for (let i = 0; i < N; i++) {
  A.push(input.slice(1 + i * N, 1 + (i + 1) * N));
}

// 토네이도가 격자 밖으로 나간 모래의 양
let outSand = 0;

// 주어진 위치가 격자 안에 있는지 확인
const inBounds = (row, col) => row >= 0 && row < N && col >= 0 && col < N;

// 토네이도가 이동하는 방향: 왼쪽, 아래, 오른쪽, 위
const directions = [
  [0, -1], // 왼쪽
  [1, 0],  // 아래
  [0, 1],  // 오른쪽
  [-1, 0]  // 위
];

// 각 방향에 따른 모래의 이동 비율(%)과 위치
// [행 오프셋, 열 오프셋, 비율(%)]
const pattern = [
  [ // 왼쪽 (이동 방향: ->왼쪽)
    [-1, 1, 1], [1, 1, 1],  // 뒤 대각선 1%
    [-1, 0, 7], [1, 0, 7],  // 옆 7%
    [-2, 0, 2], [2, 0, 2],  // 옆 2칸 2%
    [-1, -1, 10], [1, -1, 10], // 앞 대각선 10%
    [0, -2, 5]  // 앞 2칸 5%
  ],
  [ // 아래 (이동 방향: ->아래)
    [-1, -1, 1], [-1, 1, 1], // 뒤 대각선 1%
    [0, -1, 7], [0, 1, 7],  // 옆 7%
    [0, -2, 2], [0, 2, 2],  // 옆 2칸 2%
    [1, -1, 10], [1, 1, 10], // 앞 대각선 10%
    [2, 0, 5]  // 앞 2칸 5%
  ],
  [ // 오른쪽 (이동 방향: ->오른쪽)
    [-1, -1, 1], [1, -1, 1], // 뒤 대각선 1%
    [-1, 0, 7], [1, 0, 7],  // 옆 7%
    [-2, 0, 2], [2, 0, 2],  // 옆 2칸 2%
    [-1, 1, 10], [1, 1, 10], // 앞 대각선 10%
    [0, 2, 5]  // 앞 2칸 5%
  ],
  [ // 위 (이동 방향: ->위)
    [1, -1, 1], [1, 1, 1],  // 뒤 대각선 1%
    [0, -1, 7], [0, 1, 7],  // 옆 7%
    [0, -2, 2], [0, 2, 2],  // 옆 2칸 2%
    [-1, -1, 10], [-1, 1, 10], // 앞 대각선 10%
    [-2, 0, 5]  // 앞 2칸 5%
  ]
];

// 토네이도가 이동하는 경로를 계산
function getPath(row, col) {
  const path = [];
  let curRow = row;
  let curCol = col;
  let steps = 1;
  let done = false;

  while (!done) {
    for (let d = 0; d < directions.length; d++) {
      for (let s = 0; s < steps; s++) {
        if (curRow === 0 && curCol === 0) { done = true; break; }
        path.push(d);
        curRow += directions[d][0];
        curCol += directions[d][1];
      }
      if (done) break;
      if (d % 2 === 1) steps++;
    }
  }

  return path;
}

const center = Math.floor(N / 2);
const path = getPath(center, center);

// 토네이도가 이동하면서 모래를 흩날리는 과정 시뮬레이션
let row = center;
let col = center;

for (const d of path) {
  // 먼저 이동
  row += directions[d][0];
  col += directions[d][1];

  // 도착한 칸의 모래를 도착 방향으로 흩날림
  const sandAmount = A[row][col];
  A[row][col] = 0;

  let distributedSand = 0;

  for (const [dr, dc, percent] of pattern[d]) {
    const targetRow = row + dr;
    const targetCol = col + dc;
    const movedSand = Math.floor(sandAmount * percent / 100);
    distributedSand += movedSand;

    if (inBounds(targetRow, targetCol)) {
      A[targetRow][targetCol] += movedSand;
    } else {
      outSand += movedSand;
    }
  }

  // 남은 모래는 알파 위치(한 칸 더 앞)로 이동
  const nextRow = row + directions[d][0];
  const nextCol = col + directions[d][1];
  const alphaSand = sandAmount - distributedSand;

  if (inBounds(nextRow, nextCol)) {
    A[nextRow][nextCol] += alphaSand;
  } else {
    outSand += alphaSand;
  }
}

console.log(outSand);

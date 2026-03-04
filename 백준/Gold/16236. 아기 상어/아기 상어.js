const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 1번째 줄: 공간의 크기 N
// 2번째 줄 ~: N개의 줄에 공간의 상태 (0: 빈 칸, 1~6: 물고기의 크기, 9: 아기 상어의 위치)

const N = input[0];
const grid = [];
let sharkSize = 2;
let eatCount = 0;
let totalTime = 0;
let sharkRow = 0;
let sharkCol = 0;

for (let i = 0; i < N; i++) {
  const rowData = input.slice(1 + i * N, 1 + (i + 1) * N);
  grid.push(rowData);
  for (let j = 0; j < N; j++) {
    if (rowData[j] === 9) {
      sharkRow = i;
      sharkCol = j;
      grid[i][j] = 0; // 아기 상어 위치는 빈 칸으로 처리
    }
  }
}

// BFS로 먹을 수 있는 물고기 탐색
function findTarget() {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const queue = [[sharkRow, sharkCol, 0]]; // [curRow, curCol, distance]
  visited[sharkRow][sharkCol] = true;
  const targets = [];

  let head = 0;
  while (head < queue.length) {
    const [curRow, curCol, distance] = queue[head++];

    if (targets.length > 0 && distance >= targets[0][2]) break;

    for (const [deltaRow, deltaCol] of [[-1, 0], [0, -1], [0, 1], [1, 0]]) {
      const nextRow = curRow + deltaRow;
      const nextCol = curCol + deltaCol;

      if (nextRow >= 0 && nextRow < N && nextCol >= 0 && nextCol < N && !visited[nextRow][nextCol]) {
        visited[nextRow][nextCol] = true;
        if (grid[nextRow][nextCol] <= sharkSize) {
          queue.push([nextRow, nextCol, distance + 1]);
          if (grid[nextRow][nextCol] > 0 && grid[nextRow][nextCol] < sharkSize) {
            targets.push([nextRow, nextCol, distance + 1]);
          }
        }
      }
    }
  }

  if (targets.length === 0) return null;

  targets.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]; // 행 기준
    return a[1] - b[1]; // 열 기준
  });

  return targets[0];
}

// 시뮬레이션
while (true) {
  const target = findTarget();
  if (!target) break; // 먹을 수 있는 물고기가 없으면 종료

  const [targetRow, targetCol, distance] = target;
  totalTime += distance; // 이동 시간 추가
  sharkRow = targetRow;
  sharkCol = targetCol;
  grid[targetRow][targetCol] = 0; // 물고기 먹음
  eatCount++; // 경험치 증가

  if (eatCount === sharkSize) {
    sharkSize++; // 상어 크기 증가
    eatCount = 0; // 경험치 초기화
  }
}

console.log(totalTime);
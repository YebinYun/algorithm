const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = Number(input[0]); // 세로(행)
const M = Number(input[1]); // 가로(열)

// maze[y][x]: '1'이면 이동 가능, '0'이면 벽
const maze = [];

// visited[y][x]: (0,0)에서 해당 칸까지의 최단 거리
const visited = Array.from({ length: N }, () => Array(M).fill(0));

const directions = [
  [-1, 0], // 상
  [1, 0],  // 하
  [0, -1], // 좌
  [0, 1],  // 우
]; // 이동 방향

// BFS (최단 거리 탐색): visited 배열에 거리 누적
function bfs() {
    const queue = []; // (x, y) 좌표 저장

    // 시작점 초기화
    queue.push([0, 0]);
    visited[0][0] = 1;

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // 범위 내, 이동 가능, 미방문 칸이면 진행
            if (
                nx >= 0 && nx < M &&
                ny >= 0 && ny < N &&
                maze[ny][nx] === '1' &&
                visited[ny][nx] === 0
            ) {
                visited[ny][nx] = visited[y][x] + 1;
                queue.push([nx, ny]);
            }
        }
    }
}

// 문자열 한 줄을 문자 배열로 변환
for (let i = 0; i < N; i++) {
    maze.push(input[2 + i].split(''));
}

bfs();

// 도착점 (N-1, M-1)의 거리 = 최단 이동 칸 수
console.log(visited[N - 1][M - 1]);

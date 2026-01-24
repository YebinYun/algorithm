const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const T = input[0]; // 테스트 케이스 개수
let index = 1; // input 배열을 순차적으로 읽기 위한 포인터

for (let t = 0; t < T; t++) {
    // 현재 테스트 케이스의 정보
    const M = input[index]; // 가로 길이
    const N = input[index + 1]; // 세로 길이
    const K = input[index + 2]; // 배추 개수
    index += 3;

    // 배추밭 초기화: field[y][x] = 1 이면 배추가 심어진 상태
    const field = Array.from({ length: N }, () => Array(M).fill(0));

    // 배추 위치 표시
    for (let k = 0; k < K; k++) {
        const x = input[index];
        const y = input[index + 1];
        field[y][x] = 1;
        index += 2;
    }

    let wormCount = 0; // 필요한 지렁이 수
    const directions = [
        [0, -1], // 상
        [0, 1], // 하
        [-1, 0], // 좌
        [1, 0], // 우
    ];

    // DFS: 현재 배추와 연결된 모든 배추를 방문 처리
    const dfs = (x, y) => {
        field[y][x] = 0; // 방문 처리
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (
                nx >= 0 && nx < M &&
                ny >= 0 && ny < N &&
                field[ny][nx] === 1
            ) {
                dfs(nx, ny);
            }
        }
    };
    
     // 전체 밭 탐색: 새로운 배추 군락을 발견할 때마다 DFS 실행
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (field[y][x] === 1) {
                dfs(x, y);
                wormCount++;
            }
        }
    }

    console.log(wormCount);
}

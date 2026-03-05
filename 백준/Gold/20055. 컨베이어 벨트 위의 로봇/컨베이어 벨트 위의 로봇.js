const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 1번 줄: 컨베이어 벨트 길이 N, 내구도가 0이 되는 칸의 개수 K
// 2번 줄: 컨베이어 벨트의 각 칸의 내구도 A0, A1, ..., A2N-1
const N = input[0];
const K = input[1];
const belt = input.slice(2, 2 + 2 * N);

// 컨베이어 벨트의 각 칸에 로봇이 있는지 여부를 나타내는 배열
const robots = new Array(2 * N).fill(false);
let step = 0;

while (true) {
  step++;

  // 벨트와 로봇이 한 칸 회전
  belt.unshift(belt.pop());
  robots.unshift(robots.pop());
  robots[N - 1] = false;  // 내리는 위치 로봇 제거

  // 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동
  for (let i = N - 2; i >= 0; i--) {
    if (robots[i] && !robots[i + 1] && belt[i + 1] > 0) {
      robots[i] = false;
      robots[i + 1] = true;
      belt[i + 1]--;
    }
  }
  robots[N - 1] = false; // 이동 후에도 내리는 위치 로봇 제거

  // 올리는 위치에 내구도가 0이 아닌 경우 로봇을 올ㄹ림
  if (belt[0] > 0) {
    robots[0] = true;
    belt[0]--;
  }

  // 내구도가 0인 칸의 개수가 K개 이상이면 과정을 종료
  const brokenCount = belt.filter((hp) => hp === 0).length;
  if (brokenCount >= K) {
    break;
  }
}

console.log(step);
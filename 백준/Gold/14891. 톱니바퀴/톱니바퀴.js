const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// 1~4번 줄 : 톱니바퀴 상태
// 5번 줄 : 회전 횟수 K
// 6, 7, ... : 회전 정보 (톱니바퀴 번호, 회전 방향)

const wheels = input.slice(0, 4).map((line) => String(line).padStart(8, '0').split("").map(Number));
const K = input[4];
const rotations = [];
for (let i = 5; i < 5 + K * 2; i += 2) {
  rotations.push([input[i], input[i + 1]]);
}

// 회전 함수
function rotate(wheel, direction) {
  if (direction === 1) {
    // 시계 방향
    return [wheel[7], ...wheel.slice(0, 7)];
  } else {
    // 반시계 방향
    return [...wheel.slice(1), wheel[0]];
  }
}

// 회전 실행 함수
function chainRotate(gearIndex, direction, visited) {
  visited.add(gearIndex);

  // 왼쪽 톱니바퀴와의 상호작용
  if (gearIndex > 0 && !visited.has(gearIndex - 1)) {
    if (wheels[gearIndex][6] !== wheels[gearIndex - 1][2]) {
      chainRotate(gearIndex - 1, -direction, visited);
    }
  }

  // 오른쪽 톱니바퀴와의 상호작용
  if (gearIndex < 3 && !visited.has(gearIndex + 1)) {
    if (wheels[gearIndex][2] !== wheels[gearIndex + 1][6]) {
      chainRotate(gearIndex + 1, -direction, visited);
    }
  }

  // 현재 톱니바퀴 회전
  wheels[gearIndex] = rotate(wheels[gearIndex], direction);
}

// 회전 정보 처리
for (const [wheelNum, direction] of rotations) {
  const visited = new Set();
  chainRotate(wheelNum - 1, direction, visited);
}

// 점수 계산
let score = 0;
if (wheels[0][0] === 1) score += 1;
if (wheels[1][0] === 1) score += 2;
if (wheels[2][0] === 1) score += 4;
if (wheels[3][0] === 1) score += 8;

console.log(score); 
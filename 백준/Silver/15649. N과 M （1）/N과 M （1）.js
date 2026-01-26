const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = input[0];
const M = input[1];
const result = [];
const used = Array(N + 1).fill(false);
let output = "";

function dfs() {
    // 종료 조건: 수열 길이가 M이면 출력 대상
    if (result.length === M) {
        output += result.join(" ") + "\n";
        return;
    }

    // 1부터 N까지 숫자 중 사용하지 않은 수 선택
    for (let i = 1; i <= N; i++) {
        if (!used[i]) {
            used[i] = true; // 사용 처리
            result.push(i); // 현재 수열에 추가

            dfs(); // 다음 자리 탐색

            result.pop(); // 되돌리기 (백트래킹)
            used[i] = false; // 사용 해제
        }
    }
}

dfs();
console.log(output.trim());

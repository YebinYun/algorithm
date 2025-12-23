const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = Number(input[0]);
const K = Number(input[1]);

const removed = new Array(N + 1).fill(false);
let count = 0;
let answer = 0;

for (let p = 2; p <= N; p++) {
  if (removed[p]) continue;
    
  for (let multiple = p; multiple <= N; multiple += p) {
    if (removed[multiple]) continue;
      
    removed[multiple] = true;
    count++;
      
    if (count === K) {
      answer = multiple;
      break;
    }
  }
  if (answer !== 0) break;
}

console.log(answer);

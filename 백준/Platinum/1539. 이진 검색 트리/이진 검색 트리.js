const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);


const N = input[0];
const P = input.slice(1);

const depth = new Array(N).fill(0);
const bit = new Array(N + 1).fill(0);

function add(i, delta) {
  while (i <= N) {
    bit[i] += delta;
    i += i & -i;
  }
}

function rangeSum(i) {
  let s = 0;
  while (i > 0) {
    s += bit[i];
    i -= i & -i;
  }
  return s;
}

function kth(k) {
  let pos = 0;
  for (let i = 1 << 18; i > 0; i >>= 1) {
    if (pos + i <= N && bit[pos + i] < k) {
      k -= bit[pos + i];
      pos += i;
    }
  }
  return pos + 1;
}

let totalDepth = 0;

for (let i = 0; i < N; i++) {
  const x = P[i];
  const idx = x + 1;

  const lessCount = rangeSum(idx - 1);

  let predDepth = 0;
  if (lessCount > 0) {
    const pred = kth(lessCount) - 1;
    predDepth = depth[pred];
  }

  let succDepth = 0;
  if (lessCount < i) {
    const succ = kth(lessCount + 1) - 1;
    succDepth = depth[succ];
  }

  depth[x] = Math.max(predDepth, succDepth) + 1;
  totalDepth += depth[x];

  add(idx, 1);
}

console.log(totalDepth);
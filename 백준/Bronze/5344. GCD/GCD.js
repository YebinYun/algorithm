const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

// gcd(a, b) = gcd(b, a % b)

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  let x = Number(input[i * 2 - 1]);
  let y = Number(input[i * 2]);

  while (y !== 0) {
    const temp = x % y;
    x = y;
    y = temp;
  }

  console.log(x);
}

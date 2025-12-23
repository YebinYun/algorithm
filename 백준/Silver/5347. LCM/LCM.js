const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

// LCM(a, b) × GCD(a, b) = a × b

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const a = Number(input[i * 2 - 1]);
  const b = Number(input[i * 2]);
  let x = a;
  let y = b;
    
  while (y !== 0) {
    const temp = x % y;
    x = y;
    y = temp;
  }
  const gcd = x;
  const lcm = (a * b) / gcd;

  console.log(lcm);
}

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const count = Number(input[0]);
let result = 0;

for (let i = 1; i <= count; i++) {
  const number = Number(input[i]);
  let isPrime = true;
    
  if (number === 0 || number === 1) {
    isPrime = false;
  }

  for (let j = 2; j <= Math.sqrt(number); j++) {
    if (number % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) result++;
}
console.log(result);

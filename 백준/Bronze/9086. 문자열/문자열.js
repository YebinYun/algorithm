const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 입력값에 0번째는 출력 갯수
// 나머지 값들은 처리할 데이터
// for문을 돌면서 첫글자와 마지막 글자를 추출하여 배열에 담기

const count = Number(input[0]);
const result = [];

for (let i = 1; i <= count; i++) {
  const word = input[i];
  const firstChar = word[0];
  const lastChar = word[word.length - 1];
  result.push(firstChar + lastChar);
}

console.log(result.join("\n"));

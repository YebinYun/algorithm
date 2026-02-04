const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = parseInt(input[0], 10);

// 각 노드는 [왼쪽 자식, 오른쪽 자식] 형태로 저장
const A = Array.from({ length: 26 }, () => [".", "."]);

// 입력으로 주어진 부모-자식 관계를 트리에 저장
for (let i = 0; i < N; i++) {
  const parent = input[1 + i * 3];
  const left = input[2 + i * 3];
  const right = input[3 + i * 3];

  // 부모 노드를 인덱스로 변환하여 자식 정보 저장
  A[parent.charCodeAt(0) - 65] = [left, right];
}

// 각 순회 결과를 누적할 문자열
let preOrderResult = "";
let inOrderResult = "";
let postOrderResult = "";

// 전위 순회: 현재 노드 → 왼쪽 → 오른쪽
function preOrder(node) {
  if (node === ".") return; // 자식이 없으면 종료
  preOrderResult += node;   // 현재 노드 처리
  const [l, r] = A[node.charCodeAt(0) - 65];
  preOrder(l);
  preOrder(r);
}

// 중위 순회: 왼쪽 → 현재 노드 → 오른쪽
function inOrder(node) {
  if (node === ".") return;
  const [l, r] = A[node.charCodeAt(0) - 65];
  inOrder(l);
  inOrderResult += node;    // 왼쪽 처리 후 현재 노드 처리
  inOrder(r);
}

// 후위 순회: 왼쪽 → 오른쪽 → 현재 노드
function postOrder(node) {
  if (node === ".") return;
  const [l, r] = A[node.charCodeAt(0) - 65];
  postOrder(l);
  postOrder(r);
  postOrderResult += node; // 모든 자식 처리 후 현재 노드 처리
}

// 문제 조건상 루트는 항상 'A'
preOrder("A");
inOrder("A");
postOrder("A");

console.log(preOrderResult);
console.log(inOrderResult);
console.log(postOrderResult);

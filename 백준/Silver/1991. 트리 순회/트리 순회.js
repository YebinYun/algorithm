const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = parseInt(input[0]);
const A = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  const parent = input[1 + i * 3];
  const left = input[2 + i * 3];
  const right = input[3 + i * 3];
  A[parent.charCodeAt(0) - 65] = [left, right];
}

let preOrderResult = "";
let inOrderResult = "";
let postOrderResult = "";

function preOrder(node) {
  if (node === ".") return;
  preOrderResult += node;
  preOrder(A[node.charCodeAt(0) - 65][0]);
  preOrder(A[node.charCodeAt(0) - 65][1]);
}

function inOrder(node) {
  if (node === ".") return;
  inOrder(A[node.charCodeAt(0) - 65][0]);
  inOrderResult += node;
  inOrder(A[node.charCodeAt(0) - 65][1]);
}

function postOrder(node) {
  if (node === ".") return;
  postOrder(A[node.charCodeAt(0) - 65][0]);
  postOrder(A[node.charCodeAt(0) - 65][1]);
  postOrderResult += node;
}

preOrder("A");
inOrder("A");
postOrder("A");

console.log(preOrderResult);
console.log(inOrderResult);
console.log(postOrderResult);
function solution(n) {
   return [...n.toString()].reduce((prev, cur) => parseInt(prev, 10)+ parseInt(cur, 10),0)
}
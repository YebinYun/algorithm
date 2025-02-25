function solution(n) {
  const binaryString = n.toString(2);  // 주어진 숫자 n을 이진수 문자열로 변환
  let ans = 0;  // '1'의 개수를 세기 위한 변수 초기화
  
  // 이진수 문자열의 각 비트를 반복하며 비트가 '1'인 경우 ans를 1 증가시킴
  [...binaryString].forEach(bit => {
    if (bit === '1') ans++;
  });
  
  return ans;  // '1'의 개수를 반환
}
function solution(n) {
  if (n === 1 || n === 2) return n; // n이 1 또는 2일 경우 반환

  // dp 배열을 생성하여 초기화
  const mod = 1234567;
  const dp = Array(n).fill(0);
  
  // 첫 번째와 두 번째 칸의 경우 초기값 설정
  dp[0] = 1; // 1칸에 도달하는 방법
  dp[1] = 2; // 2칸에 도달하는 방법

  // dp 배열을 채우기
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
  }

  return dp[n - 1];  // 마지막 칸에 도달하는 방법의 수 반환
}

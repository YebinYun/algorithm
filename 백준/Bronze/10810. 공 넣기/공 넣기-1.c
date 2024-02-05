#include <stdio.h>

int main() {

  int N, M, a, b, c;
    
  // 바구니 배열 초기화
  int arr[101] = { 0, };

  // 바구니의 개수 N과 공을 넣는 횟수 M 입력
  scanf("%d %d", &N, &M);

  // M번 반복하여 공을 넣기
  for(int i = 0; i < M; i++) {
    // a부터 b까지의 바구니 범위와 넣을 공의 번호 c 입력
    scanf("%d %d %d", &a, &b, &c);
      
    // 바구니에 공을 넣기
    for(int k = a; k <= b; k++) {
      arr[k] = c;
    }
  }

  // 각 바구니에 들어있는 공 출력
  for(int i = 1; i <= N; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}

#include <stdio.h>

int main() {
  int N, M, a, b;
    
  // 바구니 배열 초기화
  int arr[101] = { 0, };
  
  // 바구니의 개수 N과 바꿀 횟수 M 입력
  scanf("%d %d", &N, &M);

  // 처음 각 바구니에는 자신의 번호가 적힌 공이 있고,
  for(int i = 1; i <= N; i++) {
    arr[i] = i;
  }

  // M번 반복하여 공을 교환
  for(int i = 0; i < M; i++) {
    // 바꿀 두 바구니의 번호 입력
    scanf("%d %d", &a, &b);
      
    // 공 교환
    int temp = 0;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  // 각 바구니에 들어있는 공 출력
  for(int i = 1; i <= N; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}

#include <stdio.h>

int main() {
  int N, M, a, b;
  int arr[101] = { 0, };
  
  scanf("%d %d", &N, &M);

  for(int i = 1; i <= N; i++) {
    arr[i] = i;
  }

  for(int i = 0; i < M; i++) {
    scanf("%d %d", &a, &b);
    int temp = 0;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  for(int i = 1; i <= N; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}
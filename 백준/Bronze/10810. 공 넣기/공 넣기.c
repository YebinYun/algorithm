#include <stdio.h>

int main() {

  int N, M, a, b, c;
  int arr[101] = { 0, };

  scanf("%d %d", &N, &M);

  for(int i = 0; i < M; i++) {
    scanf("%d %d %d", &a, &b, &c);
    for(int k = a; k <= b; k++) {
      arr[k] = c;
    }
  }

  for(int i = 1; i <= N; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}
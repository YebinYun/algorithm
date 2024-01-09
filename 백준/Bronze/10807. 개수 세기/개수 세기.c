#include <stdio.h>

int main() {
    
  int N, V, count = 0;
  int arr[101];

  scanf("%d", &N);

  for(int i = 0; i < N; i++) {
    scanf("%d", &arr[i]);
  }
  scanf("%d", &V);

  for(int i = 0; i < N; i++) {
    if(arr[i] == V) 
      count++;
  }

  printf("%d", count);
}
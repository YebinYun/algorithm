#include <stdio.h>
// #define MAX_SIZE 101

int main() {
    
  int N;
  scanf("%d", &N);
    
  int arr[101];
  // int arr[MAX_SIZE];

  for(int i = 0; i < N; i++) {
    scanf("%d", &arr[i]);
  }
 
  int v;
  scanf("%d", &v);
    
  int count = 0;

  for(int i = 0; i < N; i++) {
    if(arr[i] == v) 
      count++;
  }

  printf("%d", count);
  
  return 0;
}

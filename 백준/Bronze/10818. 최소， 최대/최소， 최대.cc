#include <stdio.h>

int main() {
    int N;
    scanf("%d", &N);
    
    int arr[N];
    
    // N개의 정수를 입력받아 배열에 저장
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }

    int min = arr[0]; 
    int max = arr[0];

    // 배열을 순회하면서 최솟값과 최댓값 찾기
    for (int j = 0; j < N; j++) {
        // 현재 값이 최솟값보다 작으면 갱신
        if (arr[j] < min) {
            min = arr[j];
        }
        // 현재 값이 최댓값보다 크면 갱신
        if (arr[j] > max) {
            max = arr[j];
        }
    }

    printf("%d %d", min, max);

    return 0;
}
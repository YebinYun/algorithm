#include <stdio.h>

int main() {
	int n, x;
	scanf("%d %d", &n, &x);

	int arr[n];
    
	// n개의 정수를 입력받아 배열에 저장
	for (int i = 0; i < n; i++) {
        	scanf("%d", &arr[i]);
        	// x보다 작은 수 출력
		 if (arr[i] < x) {
            		printf("%d ", arr[i]);
        	}
	}
	return 0;
}

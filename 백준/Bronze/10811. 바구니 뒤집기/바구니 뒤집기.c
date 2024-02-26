#include <stdio.h>

// 두 정수를 바꾸는 change 함수
void change(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    int N, M;
    scanf("%d %d", &N, &M); // 바구니의 개수 N과 바꾸는 횟수 M 입력 받음

    int basket[N]; // 바구니 배열
    // 바구니에 순차적으로 번호 부여
    for (int a = 0; a < N; a++) {
        basket[a] = a + 1;
    }

    // M번의 바구니 순서 변경
    for (int b = 0; b < M; b++) {
        int i, j;
        scanf("%d %d", &i, &j); // 바꾸는 범위 입력 받음
        i--; // 배열의 인덱스는 0부터 시작하므로 1을 빼줌
        j--; // 배열의 인덱스는 0부터 시작하므로 1을 빼줌
        // i부터 j까지의 바구니 순서를 역순으로 변경
        while (i < j) {
            change(&basket[i], &basket[j]); // change 함수를 사용하여 바구니 순서 변경
            i++; // 시작 인덱스 증가
            j--; // 끝 인덱스 감소
        }
    }

    // 변경된 바구니 순서 출력
    for (int d = 0; d < N; d++) {
        printf("%d ", basket[d]);
    }

    return 0;
}

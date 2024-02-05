#include <stdio.h>

int main() {
    // 출석 번호를 체크할 배열 초기화
    int arr[31] = {0};
    int a;

    // 제출한 학생의 출석번호 입력받고 해당 번호의 배열 값을 1로 설정
    for (int i = 0; i < 28; i++) {
        scanf("%d", &a);
        arr[a] = 1;
    }

    // 제출하지 않은 학생의 출석번호 출력
    for (int i = 1; i <= 30; i++) {
        if (!arr[i]) {
            printf("%d\n", i);
        }
    }

    return 0;
}

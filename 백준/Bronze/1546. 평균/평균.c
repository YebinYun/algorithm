#include <stdio.h>

int main() {
    int t, score;
    double sum = 0, max = -1;

    // 시험 본 과목의 개수 입력
    scanf("%d", &t);

    // 과목별 성적 입력 및 최댓값 찾기
    for (int i = 0; i < t; i++) {
        scanf("%d", &score);
        sum += score;
        if (max < score) max = score;
    }

    // 새로운 평균 계산하여 출력
    double average = (sum / max * 100) / t;
    printf("%.2lf\n", average);

    return 0;
}

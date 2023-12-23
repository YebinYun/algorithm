#include <stdio.h>

int main() {
    int num1, num2;
    
    // 입력을 받으려면 scanf
    scanf("%d %d", &num1, &num2);
    
    // 출력을 하려면 printf
    printf("%d", num1 + num2);
    
    // %d는 4byte의 정수값
    return 0;
}
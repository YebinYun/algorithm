#include<stdio.h>

int main(void)
{
    int A, B;
    scanf("%d %d", &A, &B);
    
    printf("%d %d %d %d\n", A * (B % 10), A * (B % 100 / 10), A * (B / 100), A * B);

    return 0;
}
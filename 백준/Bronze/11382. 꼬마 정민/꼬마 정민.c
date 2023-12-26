#include <stdio.h>

int main() {

  // long long은 정수형 데이터를 표현하는데 사용되며, 64비트 정수를 표현할 수 있다.
  long long A, B, C;
    
    // %lld는 long long 타입에 대한 형식 지정자
    scanf("%lld %lld %lld", &A, &B, &C);
    
    printf("%lld", A + B + C);

    return 0;
}
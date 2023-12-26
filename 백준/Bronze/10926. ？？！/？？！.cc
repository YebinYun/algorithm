#include <stdio.h>

int main() {
    // 길이가 51인 문자 배열(str)을 선언. (조건 : 50자를 넘지 않는다.)
    // 51로 선언된 이유는 문자열의 마지막에 null 문자('\0')가 포함되어야 하기 때문.
    char str[51];
    
    scanf("%s", str);

    // 입력받은 문자열 출력 후 "??!"를 추가하여 출력
    printf("%s??!", str);

    return 0;
}

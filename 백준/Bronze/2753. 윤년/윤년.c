#include <stdio.h>

int main() {
    int A;
    scanf("%d", &A);
    
    int B;
    
    if (A % 400 == 0){
        B = 1;
    } else if (A % 100 == 0 ){
        B = 0;
    } else if (A % 4 == 0){
        B = 1;
    } else {
        B = 0;
    }
    
    printf("%d\n", B);
    
    return 0;
}
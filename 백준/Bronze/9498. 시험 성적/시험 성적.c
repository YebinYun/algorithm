#include <stdio.h>

int main() {
	int A;
	scanf("%d", &A);

	if (A >= 90) {
		printf("A\n");
	} else if (A >= 80) {
		printf("B\n");
	} else if (A >= 70) {
		printf("C\n");
	} else if (A >= 60) {
        printf("D\n");
    } else {
        printf("F\n");
    }
	return 0;
}
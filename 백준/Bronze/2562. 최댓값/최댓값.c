#include <stdio.h>

int main() {
	int input;
	int max = 0;
	int num = 0;

	for (int i = 1; i < 10; i++) {
		scanf("%d", &input);
		if (max < input) {
			max = input;
			num = i;
		}
	}
    
	printf("%d\n%d\n", max, num);
	return 0;
}
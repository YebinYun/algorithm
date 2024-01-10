#include <stdio.h>

int main() {
	int n, x;
	scanf("%d %d", &n, &x);

	int result;
	for (int i = 0; i < n; i++) {
		scanf("%d", &result);
		if (result < x) 
            printf("%d ", result);
        
	}
	return 0;
}
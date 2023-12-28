#include <stdio.h>

int main () {
    int h, m, t;
    scanf("%d %d %d", &h, &m, &t);
    
    h = h + (t / 60);
    m = m + (t % 60);
        
    if (m >= 60) {
        h = h + 1;
        m = m - 60;
    }
    
    if (h >= 24) {
        h = h - 24;
    }
    
    printf("%d %d", h, m);
    return 0;
}
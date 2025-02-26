function solution(k, tangerine) {
    const count = {};
    tangerine.forEach((size) => {
        count[size] = (count[size] || 0) + 1;
    });
    
    const frequencies = Object.values(count).sort((a, b) => b - a);
    
    let total = 0;
    let index = 0;

    while (total < k) {
        total += frequencies[index];
        index++;
    }

    return index;
}

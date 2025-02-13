function solution(n) {
    const count = n.toString(2).split('1').length - 1;
    let answer = n + 1;
    
    const check = (m) => {
        const num_count = m.toString(2).split('1').length - 1;
        return num_count === count;
    };
    
    while (!check(answer)) answer++;

    return answer;
}
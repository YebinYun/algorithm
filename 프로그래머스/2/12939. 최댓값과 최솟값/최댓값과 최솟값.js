function solution(s) {
    let answer = s.split(" ");
    
    let min = Math.min(...answer)
    let max = Math.max(...answer)
    
    return `${min} ${max}`;
}
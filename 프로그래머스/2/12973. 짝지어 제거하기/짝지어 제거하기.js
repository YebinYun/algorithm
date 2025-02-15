function solution(s) {
    var answer = [];

    for (const char of s) {
        if (answer.length > 0 && answer[answer.length - 1] === char) {
            answer.pop(); 
        } else {
            answer.push(char); 
        }
    }

    return answer.length === 0 ? 1 : 0; 
}
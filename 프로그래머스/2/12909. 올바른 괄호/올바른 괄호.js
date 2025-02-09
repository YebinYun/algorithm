function solution(s){
    var answer = 0; 
    const arr = s.split('');
    
    if (arr[0] === ")" || arr[arr.length - 1] === "(" || arr.length === 0) {
        return false;
    }
    
    const result = arr.reduce((acc, item) => {
        if (item === "(") {
            answer++; 
        } else if (item === ")") {
            if (answer === 0) {
                return false;
            }
            answer--; 
            acc++; 
        }
        return acc; 
    }, 0);
    
    return answer === 0; 
}
function solution(s) {
    var answer = s.toLowerCase();
    
    return answer.split(' ').map((word) => 
        word.replace(/^[a-z]/, word.charAt(0).toUpperCase())
    ).join(' ');
}
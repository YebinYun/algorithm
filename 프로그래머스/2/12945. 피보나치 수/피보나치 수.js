function solution(n) {
    var answer = Array.from({ length: n - 1 }, (_, i) => i + 2)
    
    return answer.reduce( ([f0, f1]) => 
        [(f1) % 1234567, (f0 + f1) % 1234567], [0, 1]
    )[1];
}
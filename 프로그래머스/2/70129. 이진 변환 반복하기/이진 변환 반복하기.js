function solution(s) {
    var answer = [0,0];
    
    while (s !== "1") {
        const arr = s.split('0');
        answer[1] += arr.length - 1; // 0의 개수 카운트
        s = arr.join('').length.toString(2); // 0 제거 후 길이를 2진법으로 변환
        answer[0]++; // 변환 횟수 증가
    }
    return answer;
}
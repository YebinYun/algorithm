const fs = require("fs"); 
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number); 

// 숫자 카드 배열을 정렬 
// 각 질문 숫자에 대해 이진 탐색 
// 있으면 1, 없으면 0 

const N = input[0]; 
const cards = input.slice(1, N + 1).sort((a, b) => a - b); 
const M = input[N + 1]; 
const questions = input.slice(N + 2, N + 2 + M); 
const result = []; 

// 질문 M개를 순서대로 처리
for (let i = 0; i < M; i++) { 
    // 이진 탐색 범위: cards 배열의 처음~끝 인덱스
    let left = 0; 
    let right = N - 1; 
    let found = 0; 
    
    // left가 right를 넘어가면 탐색 실패(없음)가 확정
    while (left <= right) { 
        // mid를 기준으로 target(questions[i])이 왼쪽/오른쪽 어디에 있을지 결정
        const mid = Math.floor((left + right) / 2); 
        
        // 중간값이 target과 같으면 존재 확정
        if (cards[mid] === questions[i]) { 
            found = 1; 
            break; // 즉시 종료
            
        // 중간값이 target보다 작다면 target은 mid보다 오른쪽에만 있을 수 있음 (정렬되어 있으니까)
        } else if (cards[mid] < questions[i]) { 
            left = mid + 1; 
        // 중간값이 target보다 크다면 target은 mid보다 왼쪽에만 있을 수 있음
        } else { 
            right = mid - 1; 
        } 
    } 
    // 이번 질문에 대한 결과(1/0)를 누적
    result.push(found); 
} 

console.log(result.join(" "));
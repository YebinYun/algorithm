function solution(n, words) {
    const seenWords = new Set(); // 사용된 단어를 저장할 Set 객체
    let result = [0, 0]; // 초기 탈락자 정보를 저장할 배열

    for (let i = 0; i < words.length; i++) {
        const numOfPlay = Math.floor(i / n) + 1; // 몇 번째 차례인지
        const numOfPerson = (i % n) + 1; // 몇 번째 사람인지

        // 이미 사용된 단어이거나, 규칙을 어기면 탈락
        if (seenWords.has(words[i]) || (i > 0 && words[i - 1].slice(-1) !== words[i][0])) {
            return [numOfPerson, numOfPlay]; // 탈락자 정보 반환
        }

        seenWords.add(words[i]); // 새로운 단어를 Set에 추가
    }

    return [0, 0]; // 탈락자가 없으면 [0, 0] 반환
}

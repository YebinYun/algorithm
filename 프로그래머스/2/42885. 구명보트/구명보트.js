function solution(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < people.length; ) {
        if (people[i] + people[people.length - 1] <= limit) {
            i++; // 가장 가벼운 사람과 가장 무거운 사람을 함께 구출
        }
        people.pop(); // 가장 무거운 사람 구출
        count++;
    }

    return count;
}

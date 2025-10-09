function solution(want, number, discount) {
    const answer = {};
    want.map((item, i) => (answer[item] = number[i]));
    
    const countItems = (arr) =>
        arr.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {});
    
    const isMatch = (items) =>
        Object.entries(answer).every(
            ([item, count]) => items[item] === count
        );
    
    const validStartDays = discount
        .map((_, i) => discount.slice(i, i + 10))
        .filter((item) => item.length === 10)
        .filter((item) => isMatch(countItems(item)));

    return validStartDays.length;
}
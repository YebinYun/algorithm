// "Greatest Common Divisor" = "최대공약수"
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(arr) {
    return arr.reduce((lcm, curr) => (lcm * curr) / gcd(lcm, curr), 1);
}

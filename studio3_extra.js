/* Recursive process

Time: Θ(n) as n increases
Space: Θ(n) as n increases

Θ(1) for both space and time as b grows

*/

function square() {
    return a * a;
}

function fast_expt(b, n) {
    return n === 0
    ? 1
    : n % 2 === 0
    ? square(fast_expt(b * b, n / 2))
    : b * fast_expt(b, n - 1);
}

fast_expt(3, 4);
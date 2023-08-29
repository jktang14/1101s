/* Recursive process

Time: Θ(n) as n increases
Space: Θ(n) as n increases

Θ(1) for both space and time as b grows

*/

function square(a) {
    return a * a;
}

function fast_expt(b, n) {
    return n === 0
    ? 1
    : n % 2 === 0
    ? square(fast_expt(b, n / 2))
    : b * fast_expt(b, n - 1);
}

fast_expt(3, 2);

function iter_fast_expt(b, n) {
    return iter(n, b, b);
}

function iter(expt, b, counter) {
    return expt === 0
    ? 1
    : expt % 2 === 0
    ? iter(expt / 2, b, counter * counter)
}




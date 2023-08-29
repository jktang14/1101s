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
    return iter(n, b, 1);
}

function iter(expt, b, product) {
    return expt === 0
    ? product
    : expt % 2 === 0
    ? iter(expt / 2, b * b, product)
    : iter(expt - 1, b, product * b);
}

/*iter(3, 4, 1)
iter(2, 4, 4)
iter(1, 16, 4)
iter(0, 16, 16 * 4)
*/

iter_fast_expt(4, 3);


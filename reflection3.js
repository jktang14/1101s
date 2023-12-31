/*
f(y => y + z)
3 => 3 + 1
4
*/

function my_sum(n) {
    return n === 1
    ? 2
    : n * (n + 1) + my_sum(n - 1);
}

display(my_sum(3));
display("q3");
// Recursive process Time and space: Θ(n)

display("q4");
function sum(term, a, next, b) {
    return a > b
    ? 0
    : term(a) + sum(term, next(a), next, b);
}

display(sum(x => x, 1, x => x + 2, 4));

function my_sum_alt(n) {
    return sum(x => x * (x + 1), 1, x => x + 1, n);
}

display(my_sum(3));

display("q5");
function sum_alt(term, a, next, b) {
    // can remove term, next, b since they do not change
    function iter(term, a, next, b, answer) {
        return a > b
            ? answer
            : iter(term, next(a), next, b, answer + term(a));
    }
    return iter(term, a, next, b, 0);
}

display(sum(x => x, 1, x => x + 2, 4));

display("q6");
/* 
a) x, f, g, y, h,

b) 

c) 4 + 8 = 12

d) y = 5
   f = y => y + 2) 
   7
*/ 







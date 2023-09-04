// q1
math_sqrt(math_log(math_E)); // 1

math_log(math_sqrt(math_E * math_E)); //1

// q2
// 2

// q3
function compose(f, g){
    return x => f(g(x));
}

function repeated(f, n) {
    return n === 0
    ? x => x
    : compose(f, repeated(f, n - 1));
}

function thrice(f) {
    return repeated(f, 3);
}

display(thrice(math_sqrt)(256));

// 27

/*q4
a: 33
b: compose function repeated 27 times
c: 1
d: square repeated 27 times, 2 passed into it




















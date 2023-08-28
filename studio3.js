import {circle, square, ribbon, blank, stack, beside, show, 
stack_frac, beside_frac} from "rune";

function moony_1(bottom_right) {
    return stack(beside(circle, blank), beside(square, bottom_right));
}

show(moony_1(ribbon));

function moony_2(n) {
    return n === 1
    ? circle
    : moony_1(moony_2(n - 1));
}
show(moony_2(5));

function moony(n) {
    // stack_frac to even out rows, beside_frac to even out columns
    return n === 1
    ? circle
    : stack_frac(1/n, beside_frac(1/n, circle, blank), beside_frac(1/n, square, moony(n - 1)));
}

show(moony(5));

/* Recursive process

O(n), treat it like 2 deferred processes 
(stack_frac and beside_frac), everytime n increases, changes by 2, essentially 2n




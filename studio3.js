import {circle, square, ribbon, blank, stack, beside, show, 
stack_frac} from "rune";

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
    : stack_frac(1/n, beside_frac(1/n, circle, blank), beside(1/n, square, moony(n - 1)));
}

show(moony(5));
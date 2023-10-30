// q1
function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const A = pair(1, () => scale_stream(2, A));
//display(stream_tail(A));
eval_stream(A, 3);
/* First value of A is 1, 2nd value is 2, 4 and so on
*/ 

// Assuming integers is a stream of positive integers
function integer_formation(n) {
    return pair(n, () => integer_formation(n + 1));
}
const integers = integer_formation(1);
function mul_streams(a,b) {
    return pair(head(a) * head(b),
            () => mul_streams(stream_tail(a), stream_tail(b)));
}

const B = pair(1, () => mul_streams(B, integers));
eval_stream(B, 4);
// 1 1 2 6 

// q2
/*function alt(n) {
    if (n % 2 === 1) {
        return pair(1, () => alt(n + 1));
    }
    else {
        return pair(-1, () => alt(n + 1));
    }
}


const alt_ones = alt(1);
eval_stream(alt_ones, 6); */

/*const alt_ones = pair(1, () => scale_stream(-1, alt_ones));
eval_stream(alt_ones, 6);
*/

/*const alt_ones = pair(1, () => pair(-1, () => alt_ones));
eval_stream(alt_ones, 6);
*/

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2), () => add_streams(stream_tail(s1), stream_tail(s2)));
}

//const zeros = add_streams(alt_ones, stream_tail(alt_ones));
//eval_stream(zeros, 5);

// s1
//const ones = pair(1, () => ones);
// s2
/*const s2 = pair(1, () => stream_map(x => x + 1, s2));
eval_stream(s2, 10);
*/



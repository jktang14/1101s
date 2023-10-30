// q1
function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const A = pair(1, () => scale_stream(2, A));
display(stream_tail(A));
eval_stream(A, 3);
/* First value of A is 1, 2nd value is 2, 4 and so on
*/ 

// Assuming integers is a stream of positive integers
function mul_streams(a,b) {
    return pair(head(a) * head(b),
            () => mul_streams(stream_tail(a), stream_tail(b)));
}

const B = pair(1, () => mul_streams(B, integers));
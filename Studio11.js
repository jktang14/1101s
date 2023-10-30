// q1
function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const A = pair(1, () => scale_stream(2, A));
/* First value of A is 1, 
*/
function memo_fun(fun) {
    let already_run = false;
    let result = undefined;

    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
               () => add_streams(stream_tail(s1), 
                                 stream_tail(s2)));
}

function mul_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) * head(s2),
               () => mul_streams(stream_tail(s1), 
                                 stream_tail(s2)));
}

function scale_stream(s, f) {
    return stream_map(x => x * f, s);
}

const integers = integers_from(1);
const ones = pair(1, () => ones);


// q1
//const x = stream_map(display, enum_stream(0, 10));
//0 1 2 3
//stream_ref(x, 3);
// 0 1 2 3 4 5
// why it dont start from 0?
//stream_ref(x, 5);

function stream_map_optimized(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
            memo_fun( () => stream_map_optimized(
                    f, stream_tail(s)) ));
}
const z = stream_map_optimized(display, enum_stream(0, 10));
// 0 1 2 3 4 5
stream_ref(z, 3);
stream_ref(z, 5);

// q2
function zip_list_of_streams(lst) {
    function helper(lst) {
        if (is_null(tail(lst))) {
            return head(lst);
        }
        else {
            stream_append(list_to_stream(map(x => head(x), lst)), helper(map(x => stream_tail(x), lst)));
        }
    }
}
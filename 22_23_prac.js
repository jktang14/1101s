function insert_subseq(L, pos, S) {
    let front_lst = null;
    for (let i = 0; i < pos; i = i + 1) {
        front_lst = append(front_lst, list(head(L)));
        L = tail(L);
    }
    let behind_lst = append(S, L);
    return append(front_lst, behind_lst);
}

//insert_subseq( list(10, 11, 12), 0, list(55, 66) );
// returns list(55, 66, 10, 11, 12)
//insert_subseq( list(10, 11, 12), 2, list(55, 66) );
// returns list(10, 11, 55, 66, 12)
//insert_subseq( list(10, 11, 12), 3, list(55, 66) );
// returns list(10, 11, 12, 55, 66)
//insert_subseq( list(10, 11, 12), 1, null );
// returns list(10, 11, 12)
//insert_subseq( null, 0, list(55, 66) );
// returns list(55, 66)
//insert_subseq( null, 0, null );
// returns null

function remove_subseq(L, start_pos, end_pos) {
    let len = length(L);
    let lst = null;
    for (let i = 0; i < len; i = i + 1) {
        if (!(i >= start_pos && i <= end_pos)) {
            lst = pair(head(L), lst);
        }
        L = tail(L);
    }
    return reverse(lst);
}

//remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 2, 4 );
// returns list(10, 11, 15, 16)
//remove_subseq( list(14, 11, 12, 13, 14, 15, 16), 3, 5 );
// returns list(14, 11, 12, 16)
//remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 0, 0 );
// returns list(11, 12, 13, 14, 15, 16)
//remove_subseq( list(13, 11, 12, 13, 14, 15, 16), 3, 3 );
// returns list(13, 11, 12, 14, 15, 16)
//remove_subseq( list(10, 16, 12, 13, 14, 15, 16), 6, 6 );
// returns list(10, 16, 12, 13, 14, 15)
//remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 0, 2 );
// returns list(13, 14, 15, 16)
//remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 4, 6 );
// returns list(10, 11, 12, 13)
//remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 0, 6 );
// returns null
//remove_subseq( list(10), 0, 0 );
// returns null

function is_prefix_of(subseq, seq) {
    if (length(subseq) > length(seq)) {
        return false;
    }
    for (let lst = subseq; !is_null(lst); lst = tail(lst)) {
        if (head(lst) !== head(seq)) {
            return false;
        }
        seq = tail(seq);
    }
    return true;
}

//is_prefix_of(list("a", "b", "c"),
//list("a", "b", "c", "d", "e"));
// returns true
//is_prefix_of(list("b", "c"),
//list("a", "b", "c", "d", "e"));
// returns false
//is_prefix_of(list("a", "b", "c"), list("a", "b", "c"));
// returns true
//is_prefix_of(list("a", "b", "c"),
//list("a", "b"));
// returns false
//is_prefix_of(list(), list("a", "b", "c"));
// returns true
//is_prefix_of(list(), list());
// returns true

function tail_n_times(xs, n) {
return is_null(xs)
? null
: n <= 0
? xs
: tail_n_times(tail(xs), n - 1);
}

function subseq_replace(new_sub, old_sub, seq) {
    let len = length(seq);
    let new_lst = null;
    while(!is_null(seq)) {
        if (is_prefix_of(old_sub, seq)) {
            const len2 = length(old_sub);
            seq = tail_n_times(seq, len2);
            new_lst = append(new_lst, new_sub);
        }
        else {
            new_lst = append(new_lst, list(head(seq)));
            seq = tail(seq);
        }
    }
    return new_lst;
}

subseq_replace(list("x"), list("a", "b", "a"),
list("a", "b", "a", "b", "a", "b", "a"));
// returns list("x", "b", "x")
//subseq_replace(list("x", "y", "z"), list("a", "b"),
//list("a", "b", "c", "d", "e", "a", "b"));
// returns list("x", "y", "z", "c", "d", "e", "x", "y", "z")
//subseq_replace(list("x", "y"), list("p", "q", "r"),
//list("a", "b", "a", "b", "a", "b", "a"));
// returns list("a", "b", "a", "b", "a", "b", "a")
























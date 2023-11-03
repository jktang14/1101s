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


























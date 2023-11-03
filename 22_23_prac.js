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

//subseq_replace(list("x"), list("a", "b", "a"),
//list("a", "b", "a", "b", "a", "b", "a"));
// returns list("x", "b", "x")
//subseq_replace(list("x", "y", "z"), list("a", "b"),
//list("a", "b", "c", "d", "e", "a", "b"));
// returns list("x", "y", "z", "c", "d", "e", "x", "y", "z")
//subseq_replace(list("x", "y"), list("p", "q", "r"),
//list("a", "b", "a", "b", "a", "b", "a"));
// returns list("a", "b", "a", "b", "a", "b", "a")

function make_NiFT(T) {
    let tree = null;
    let number_lst = null;
    for (let lst = T; !is_null(lst); lst = tail(lst)) {
        if (is_number(head(lst))) {
            number_lst = append(number_lst, list(head(lst)));
        }
        else {
            tree = append(tree, list(make_NiFT(head(lst))));
        }
    }
    return append(number_lst, tree);
}

//const tree1 = list( list(4,4,1), 5, 2, list(8,9), 4, list(6,7), 3 );
//display_list(make_NiFT(tree1));
// returns list( 5, 2, 4, 3, list(4,4,1), list(8,9), list(6,7) )
//const tree2 = list( list(1, 2, list(3, 4), 5), 6, null, list(7), 8, 9,
//list( list(10), 11, list(12, 13, list(14, 15)) ) );
//display_list(make_NiFT(tree2));
// returns list( 6, 8, 9, list(1, 2, 5, list(3, 4)), null, list(7),
// list( 11, list(10), list(12, 13, list(14, 15)) ) )

function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : x <= head(xs)
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}
function insertion_sort(xs) {
    return is_null(xs)
    ? xs
    : insert(head(xs), insertion_sort(tail(xs)));
}
function map_tree(fun, tree) {
    return map(sub_tree =>
    !is_list(sub_tree)
    ? fun(sub_tree)
    : map_tree(fun, sub_tree),
    tree);
}

function flatten(T) {
    return accumulate((x, y) => is_list(x) ? append(flatten(x),y) : append(list(x), y), null, T);
}

function make_SToN(T) {
    let sorted = insertion_sort(flatten(T));
    function helper(subtree) {
        const h = head(sorted);
        sorted = tail(sorted);
        return h;
    }
    return map_tree(helper, T);
}

const tree1 = list(list(4, 4, 1), 5, 2, list(8, null, 9), 4, list(6, 7), 3);
make_SToN(tree1);

function shortest_path_length(maze, start_row, start_col) {
    // steps includes G
    
}






























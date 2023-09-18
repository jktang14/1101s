function remove_duplicates(xs) {
    return accumulate((x, y) => is_null(member(x, y)) ? pair(x, y) : y, null, xs);
}

//display(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
// Result: list(1, 2, 3, 4)
//display(remove_duplicates(list("a", "x", "b", "c", "c", "b", "d")));
// Result: list("a", "x", "b", "c", "d")


function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    }
    else {
        const sub = subsets(tail(xs));
        const new_sub = map(element => pair(head(xs), element), sub);
        return append(sub, new_sub);
    }
}

subsets(list(1, 2, 3, 4));
// Result: list(list(),
// list(1), list(2), list(3),
// list(1,2), list(1,3), list(2,3),
// list(1,2,3))
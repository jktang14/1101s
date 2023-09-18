// q1
function my_map(f, xs) {
    return accumulate((x, y) => append(list(f(x)), y), null, xs);
}

// display(my_map(x => x + 1, list(1, 2, 3)));

// q2
function remove_duplicates(xs) {
    return is_null(xs)
    ? null
    : 
    append(list(head(xs)), filter(x => x !== head(xs), remove_duplicates(tail(xs))));
}

remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// Result: list(1, 2, 3, 4)
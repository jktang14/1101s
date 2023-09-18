// q1
function my_map(f, xs) {
    return accumulate((x, y) => append(list(f(x)), y), null, xs);
}

// display(my_map(x => x + 1, list(1, 2, 3)));

// q2
function remove_duplicates(xs) {
    return is_null(xs)
    ? null
    : append(list(head(xs)), filter(x => x !== head(xs), remove_duplicates(tail(xs))));
}

//display(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
// Result: list(1, 2, 3, 4)

//display(remove_duplicates(list("a", "x", "b", "c", "c", "b", "d")));
// Result: list("a", "x", "b", "c", "d")

// q3
function makeup_amount(x, coins) {
    if (x === 0) {
        // 1 way, sublist with null value
        return list(null);
    } 
    else if (x < 0 || is_null(coins)) {
        return null;
    } 
    else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // Combinations that do not use the head coin
        // for the remaining amount.
        const combi_B = ...
        // Combinations that use the head coin.
        const combi_C = makeup_amount(x - head(coins), tail(coins));
        return append(combi_A, combi_C);
    }
}

makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// list(1, 20, 1), list(1, 10, 5, 5, 1),
// list(1, 10, 5, 1, 5))









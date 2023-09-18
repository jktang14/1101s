// q1
function my_map(f, xs) {
    return accumulate((x, y) => append(list(f(x)), y), null, xs);
}

my_map(x => x + 1, list(1, 2, 3));
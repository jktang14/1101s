// q1
const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));

function flatten_list(lst) {
    return accumulate(append, null, lst);
}

flatten_list(LoL);

// q2
function tree_sum(tree) {
    if (is_null(tree)) {
        return 0;
    }
    else if (is_list(head(tree))) {
        return tree_sum(head(tree)) + tree_sum(tail(tree));
    }
    else {
        return head(tree) + tree_sum(tail(tree));
    }
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);

// q3
function accumulate_tree(f, op, initial, tree) {
    // Have to check for both cases, same as q2, where head is either a tree or a number
    return accumulate((curr, wish) => is_number(curr) ? op(f(curr), wish) : op(accumulate_tree(f, op, initial, curr)),
    initial, tree);
}

function count_data_items(tree) {
    return accumulate_tree(x => 1, (x, y) => x + y, 0 , tree);
}
const treeC = list(list(1, 2), null, 3, list(4, null));
display(count_data_items(treeC));

function flatten(tree) {
    return accumulate_tree(x => list(x), append, null , tree);
}

display(flatten(LoL));

function tree_sum2(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

//tree_sum2(my_tree);
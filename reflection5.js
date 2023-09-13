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
function every_second(items) {
    if (length(items) === 0 || length(items) === 1){
        return null;
    }
    else {
        return pair(list_ref(items, 1), every_second(tail(tail(items))));
    }
}

display(every_second(list("a", "x", "b", "y", "c", "z", "d")));

function sums(lst) {
    function sum(lst) {
        if (is_null(lst)) {
            return 0;
        }
        else {
            return head(lst) + sum(tail(lst));
        }
    }
    function every_first(lst) {
        if (is_null(lst)){
            return null;
        }
        else if (length(lst) === 1) {
            return pair(list_ref(lst, 0), null);
        }
        else {
            return pair(list_ref(lst, 0), every_first(tail(tail(lst))));
        }
    }
    const odd_sum = sum(every_second(lst));
    const even_sum = sum(every_first(lst));
    return list(even_sum, odd_sum);
}

sums(list(1, 2, 3, 4, 5));
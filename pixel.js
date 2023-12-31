// Level 1
function count_grantable_wishes(wishlist, skill_level) {
    if (is_null(wishlist)) {
        return 0;
    }
    else {
        const curr_skill = tail(head(wishlist));
        if (curr_skill <= skill_level) {
            return 1 + count_grantable_wishes(tail(wishlist), skill_level);
        }
        else {
            return count_grantable_wishes(tail(wishlist), skill_level);
        }
    }
}

//count_grantable_wishes(wishlist, 2);
// Level 2
function biggest_grantable_wish(wishlist, skill_level) {
    if (is_null(wishlist)) {
        return pair("", 0);
    }
    else {
        const curr_score = tail(head(wishlist));
        const next_biggest = biggest_grantable_wish(tail(wishlist), skill_level);
        if (curr_score <= skill_level) {
            if (curr_score > tail(next_biggest)) {
                return head(wishlist);
            }
            else {
                return next_biggest;
            }
        }
        else {
            return next_biggest;
        }
    }
}

//biggest_grantable_wish(wishlist, 2);
// Level 3
function n_biggest_grantable_wishes(wishlist, skill_level, n) {
    function eliminate(p, lst) {
        if (is_null(lst)) {
            return null;
        }
        else {
            if (equal(head(lst), p)) {
                return tail(lst);
            }
            else {
                return pair(head(lst), eliminate(p, tail(lst)));
            }
        }
    }
    if (n === 0) {
        return null;
    }
    else {
        const biggest_wish = biggest_grantable_wish(wishlist, skill_level);
        return pair(biggest_wish, n_biggest_grantable_wishes(eliminate(biggest_wish, wishlist), skill_level, n - 1));
    }
}

//n_biggest_grantable_wishes(wishlist, 3, 2);

function get_happiness(wish) {
    if (equal(wish, pair("c", 3))) {
        return 1;
    }
    else if (equal(wish, pair("a", 1))) {
        return 2;
    }
    else if (equal(wish, pair("b", 2))) {
        return 3;
    }
    else {
        return 4;
    }
}


// Level 4a
function sum_happiness(wishlist) {
    return accumulate((x, y) => get_happiness(x) + y, 0, wishlist);
}

// Level 4b
/* function maximise_happiness(wishlist, limit) {
    // list of wishes
    function calculate_difficulty(lst) {
        return accumulate((x, y) => tail(x) + y, 0, lst);
    }
    if (is_null(wishlist)) {
        return null;
    }
    else {
        const rest_maximum_list = maximise_happiness(tail(wishlist), limit);
        const head_score = tail(head(wishlist));
        const new_max_list = pair(head(wishlist), rest_maximum_list);
        if (calculate_difficulty(new_max_list) <= limit) {
            if (sum_happiness(rest_maximum_list) > sum_happiness(new_max_list)) {
                return rest_maximum_list;
            }
            else {
                return new_max_list;
            }
        }
        else {
            return rest_maximum_list;
        }
    }
} */

function maximise_happiness(wishlist, limit) {
    if (is_null(wishlist)) {
        return null;
    }
    else if (limit < 0) {
        return null;
    }
    else {
        const head_score = tail(head(wishlist));
        // case 1: Head is included
        const list_with_head = head_score > limit 
                            ? null 
                            : pair(head(wishlist), maximise_happiness(tail(wishlist), limit - head_score));
        const head_happiness = sum_happiness(list_with_head);
        // case 2: Head not included
        const list_without_head = maximise_happiness(tail(wishlist), limit);
        const no_head_happiness = sum_happiness(list_without_head);
        return head_happiness > no_head_happiness ? list_with_head : list_without_head;
    }
}

const wishlist = list(pair("b", 2), pair("a", 1), pair("d", 4), pair("c", 3));
maximise_happiness(wishlist, 6);





















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

const wishlist = list(pair("a", 1), pair("b", 2), pair("c", 3));
count_grantable_wishes(wishlist, 2);
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

biggest_grantable_wish(wishlist, 2);
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

n_biggest_grantable_wishes(wishlist, 3, 2);

// Level 4a
function sum_happiness(wishlist) {
    return accumulate((x, y) => get_happiness(x) + y, 0, wishlist);
}

// Level 4b
function maximise_happiness(wishlist, limit) {
    
}





















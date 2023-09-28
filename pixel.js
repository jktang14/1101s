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

const wishlist = list(pair("b", 4), pair("c", 2), pair("a", 1));
count_grantable_wishes(wishlist, 2);

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

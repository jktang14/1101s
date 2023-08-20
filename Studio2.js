function biggie_size(combo) {
    return combo + 4;
}

display(biggie_size(2));

function unbiggie_size(combo) {
    return combo - 4;
} 

display(unbiggie_size(7));

function is_biggie_size(combo) {
    return combo > 4;
}

display(is_biggie_size(4));

function combo_price(combo) {
    return is_biggie_size(combo) ? unbiggie_size(combo) * 1.17 + 0.5 : combo * 1.17;
}

display(combo_price(5));

function empty_order() {
    return 0;
}

display(empty_order());

function add_to_order(order, combo) {
    function biggie_size(combo) {
    return combo + 4;
}

display(biggie_size(2));

function unbiggie_size(combo) {
    return combo - 4;
} 

display(unbiggie_size(7));

function is_biggie_size(combo) {
    return combo > 4;
}

display(is_biggie_size(4));

function combo_price(combo) {
    return is_biggie_size(combo) ? unbiggie_size(combo) * 1.17 + 0.5 : combo * 1.17;
}

display(combo_price(5));

function empty_order() {
    return 0;
}

display(empty_order());

function add_to_order(order, combo) {
    //return parse_int(stringify(order) + stringify(combo), 10);
    const combo_length = math_ceil(math_log10(combo + 1));
    return math_pow(10, combo_length) * order + combo;
}

display(add_to_order(12, 42));

function last_combo(order) {
    return order % 10;
}

display(last_combo(123));

function other_combos(order) {
    return math_floor(order / 10);
}

display(other_combos(312));









}

display(add_to_order(12, 14));

function last_combo(order) {
    return order % 10;
}

display(last_combo(123));

function other_combos(order) {
    return math_floor(order / 10);
}

display(other_combos(312));









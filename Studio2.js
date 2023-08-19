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


















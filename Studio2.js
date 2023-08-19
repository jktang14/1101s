function biggie_size(combo) {
    return combo === 1 
    ? 5 
    :combo === 2 
    ? 6 
    :combo === 3
    ? 7 
    : 8;
}

biggie_size(2);

function unbiggie_size(combo) {
    return combo === 5 ? 1 : combo === 6 
    ? 2 
    : combo === 7
    ? 3
    : 4;
} 

unbiggie_size(7);

function is_biggie_size(combo) {
    /*return combo === 5 ? true : combo === 6 
    ? true
    : combo === 7
    ? true
    : combo === 8;*/
    return combo === 5 || combo === 6 || combo === 7 || combo === 8;
}

is_biggie_size(8);

function combo_price(combo) {
    
}


















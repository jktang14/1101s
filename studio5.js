function reverse(lst) {
return is_null(lst)
? null
: list(reverse(tail(lst)), head(lst));
}

reverse(list(1, 2, 3, 4));


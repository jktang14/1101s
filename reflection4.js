// q2
// a
display(pair(1, pair(2, pair(3, null))));

// b
display(pair(1, pair(2, 3)));

// c
display(pair(pair(1, pair(2, null)), list(pair(3, pair(4,null)), pair(5, pair(6, null)))));

// q3
// a
const lst = list(7, 6, 5, 4, 3, 2, 1);
display(head(tail(tail(tail(lst)))));

// b
const lst2 = list(list(7), list(6, 5, 4), list(3, 2), 1);
display(head(tail(tail(head(tail(lst2))))));

// c
const lst3 = list(7, list(list(list(6, 5, list(list(4)), 3), 2)), 1);
head(head(head(tail(tail(head(head(head(tail(lst3)))))))));
const lst1 = list(7, list(6, 5, 4), 3, list(2, 1));
display(head(tail(head(tail(tail(tail(lst1)))))));

const lst2 = list(list(7), list(6, 5, 4), list(3, 2), 1);
display(head(tail(tail(tail(lst2)))));

const lst3 = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
display(head(head(tail(head(tail(head(tail(tail(tail(lst3))))))))));

const lst4 = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));
display(head(head(head(tail(tail(lst4))))));

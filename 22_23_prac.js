function insert_subseq(L, pos, S) {
    let front_lst = null;
    for (let i = 0; i < pos; i = i + 1) {
        front_lst = append(front_lst, list(head(L)));
        L = tail(L);
    }
    let behind_lst = append(S, L);
    return append(front_lst, behind_lst);
}

insert_subseq( list(10, 11, 12), 0, list(55, 66) );
// returns list(55, 66, 10, 11, 12)
//insert_subseq( list(10, 11, 12), 2, list(55, 66) );
// returns list(10, 11, 55, 66, 12)
//insert_subseq( list(10, 11, 12), 3, list(55, 66) );
// returns list(10, 11, 12, 55, 66)
//insert_subseq( list(10, 11, 12), 1, null );
// returns list(10, 11, 12)
//insert_subseq( null, 0, list(55, 66) );
// returns list(55, 66)
//insert_subseq( null, 0, null );
// returns null
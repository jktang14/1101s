function pascal(row, position) {
    if (row === 0 || position === 0 || position === row) {
        return 1;
    }
    else {
        return pascal(row - 1, position - 1) + pascal(row - 1, position);
    }
}
display(pascal(0,0));
display(pascal(1, 0));
display(pascal(1,1));
display(pascal(2,1));
display(pascal(3,1));
display(pascal(3,2));
display(pascal(4,2));
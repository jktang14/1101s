function rotate_matrix(M) {
    // 10
    function swap(M, row, column) {
        const temp = M[column][row];
        M[column][row] = M[row][column];
        M[row][column] = temp;
    }
    const len = array_length(M);
    for (let i = 0; i < len; i = i + 1) {
        for (let j = 1; j < len; j = j + 1) {
            swap(M, j, i);
        }
    }
    display(M);
}

rotate_matrix(
[[ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, 10, 11, 12],
[13, 14, 15, 16]]);

// 30 20 10 00
// 00 01 02 03
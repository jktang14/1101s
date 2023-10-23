function rotate_matrix(M) {
    function swap(M, row, column) {
        const temp = M[column][row];
        M[column][row] = M[row][column];
    }
    const len = array_length(M);
    for (let i = 0; i < len; i + 1) {
        for (let j = 1; j < len; j + 1) {
            swap(M, j, i);
        }
    }
}

// 30 20 10 00
// 00 01 02 03
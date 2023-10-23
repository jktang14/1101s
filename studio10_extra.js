function rotate_matrix(M) {
    // 10
    function swap(M, r1, c1, r2, c2) {
        const temp = M[r1][c1];
        M[r1][c1] = M[r2][c2];
        M[r2][c2] = temp;
    }
    const len = array_length(M);
    for (let i = 0; i < len; i = i + 1) {
        for (let j = i + 1; j < len; j = j + 1) {
            swap(M, i, j, j, i);
        }
    }
    // reverse each row
    display(M);
    const midpoint = math_floor(len / 2);
    for (let i = 0; i < len; i = i + 1) {
        for (let j = 0; j < midpoint; j = j + 1) {
            swap(M, i, j, i, len - 1 - j);
        }
    }
    return M;
}

rotate_matrix(
[[ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, 10, 11, 12],
[13, 14, 15, 16]]);

// 30 20 10 00
// 00 01 02 03
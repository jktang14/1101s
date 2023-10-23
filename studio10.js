/*function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function reverse_array(A) {
    const len = array_length(A);
    const half_len = math_floor(len / 2);
    let i = 0;
    while (i < half_len) {
        const j = len - 1 - i;
        swap(A, i, j);
        i = i + 1;
    }
}

const arr = [1, 2, 3, 4, 5];
reverse_array(arr);
arr; */

// q2 a
// theta (n^2)

// q2 b
function bubblesort_list(lst) {
    const len = length(lst);
    for (let i = len - 1; i > 0; i = i - 1) {
        for (let j = 0; j < i; j = j + 1) {
            const first = list_ref(lst, j);
            const second = list_ref(lst, j + 1);
            if (first > second) {
                set_head(member(second, lst), first);
                set_head(member(first, lst), second);
            }
        }
    }
}
const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]
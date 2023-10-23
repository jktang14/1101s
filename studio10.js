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

// q3
// yes
const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    // Your solution here.
    if (n >= 0 && k >= 0 && read(n, k) !== undefined) {
        return read(n, k);
    }
    else {
        const result = n === 0
                        ? 1
                        : n < 0 || k === 0
                        ? 0
                        : mcc(n, k - 1) + mcc(n - first_denomination(k), k);
        if (n >= 0 && k >= 0) {
            write(n, k, result);
        }
        return result;
    }
}

mcc(365, 5);  // Expected result: 1730

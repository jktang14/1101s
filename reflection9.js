// q1 
function linear_search(A, v) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== v) {
        i = i + 1;
    }
    return (i < len);
}

function make_search(A) {
    return x => linear_search(A, x);
}

const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
const my_search = make_search(my_array);

my_search(14); // returns true
// many more calls to my_search
// ...
my_search(30); // returns false

// Use of binary search, so must sort first
function make_optimized_search(A) {
    // To make a copy of the array, only choice is to use a loop and manually copy each element
    merge_sort(A);
    return x => binary_search(A, x);
}

// So we are only sorting the list just once, so time: 
// n log n (time complexity of merge_sort) + n searches * log n time for each binary search

// q2 a 
function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i = i + 1) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

fib(3);
// b
function fib1(n) {
    let first = 0;
    let second = 1;
    while (n > 1) {
        let temp = second;
        second = first + second;
        first = temp;
        n = n - 1;
    }
    return second;
}
fib1(4);
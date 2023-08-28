function factorial(n) {
    return iter(1, n);
}

function iter(product, n) {
    return n === 0 ? product : iter(product * n, n - 1);
}


factorial(5);
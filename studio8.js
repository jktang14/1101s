//1 + (2 + (3 + (4 + (5 + 6)))); // control: 7, stash: 6
// ((((1 + 2) + 3) + 4) + 5) + 6;
//(1 + 2 + 3) + (4 + 5 + 6);
//(1 + 2) + (3 + 4) + (5 + 6);

// q2
/* const c = 1;
let x = c + 2;
const d = c + x;
let y = 3;
x = c;
y = d; */

let x = undefined;
for (x = 0; x < 10; x = x + 2) {
x;
}
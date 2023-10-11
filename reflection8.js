// q1
function make_withdraw(balance, password) {
    let counter = 0;
    function withdraw(amount, p) {
        if (p === password && counter < 3) {
            counter = 0;
            if (balance >= amount) {
                balance = balance - amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        }
        else if (counter >= 3) {
            return "Account disabled";
        }
        else {
            counter = counter + 1;
            return "Wrong password; no withdraw";
        }
    }
    return withdraw;
}

const W1 = make_withdraw(100, "hi");
display(W1(40, "good"));
display(W1(5, "hi"));
display(W1(10, "good"));
display(W1(20, "good"));
display(W1(10, "good"));
display(W1(5, "good"));

// q2
let commission = 25; // my commission in dollars

// return a calculator for total price
// total price = (commission + cost) * (1 + tax_rate)

function make_price_calculator(tax_rate) {
    function calculator(cost) {
        return (commission + cost) * (1 + tax_rate);
    }
    return calculator;
}

const calc = make_price_calculator(0.07);
commission = 125;
calc(75);


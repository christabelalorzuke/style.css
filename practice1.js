const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;
const BANK_ACCOUNT_BALANCE = 303.91;
amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < BANK_ACCOUNT_BALANCE) {
    //you can buy 
    amount = amount + PHONE_PRICE

    if (amount < SPENDING_THRESHOLD)
    // you can buy an accessory
    amount = amount + ACCESSORY_PRICE;
    
}

amount = amount + calculateTax(amount);
console.log(amount.toFixed(2))

console.log("Your Purchase : " + formatPrice(amount))

if(amount>BANK_ACCOUNT_BALANCE) {
    console.log("You can't afford this purchase")
}
//• Write a program to calculate the total price of your phone purchase. 
//You will keep purchasing phones (hint: loop!) until you
//run out of money in your bank account. You’ll also buy accessories 
//for each phone as long as your purchase amount is below your mental spending threshold.
//• After you’ve calculated your purchase amount, add in the tax,
//then print out the calculated purchase amount, properly formatted.
//• Finally, check the amount against your bank account balance to see if you can afford it or not.
//• You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a
//variable for your “bank account balance.”
//• You should define functions for calculating the tax and for for‐
//matting the price with a “$” and rounding to two decimal places Bonus Challenge:
// Try to incorporate input into this program,
//perhaps with the prompt(..) covered in “Input” on page 6. You
//may prompt the user for their bank account balance, for example.Have fun and be creative!
//OK, go ahead.Try
const Items = {
    phonePrice: 99.99,
    spendingThreshold: 200,
    TaxRate: 0.08,
    accessoryPrice: 9.99,
}
var bankBalance = 303.91
var purchaseAmount = 0

function calculateTaxRate(purchaseAmount) {
    return purchaseAmount * Items.TaxRate;
}
function formatPurchaseAmount(purchaseAmount) {
    return "Your Purchase : $" + purchaseAmount.toFixed(2)
}

while (purchaseAmount < bankBalance) {
    purchaseAmount = purchaseAmount + Items["phonePrice"];
    if (purchaseAmount < Items["spendingThreshold"]) {
        purchaseAmount = purchaseAmount + Items["accessoryPrice"];
    }
}
purchaseAmount = purchaseAmount + calculateTaxRate(purchaseAmount)
console.log(formatPurchaseAmount(purchaseAmount))

purchaseAmount < bankBalance
    ? console.log(formatPurchaseAmount(purchaseAmount))
    : console.log("You can't afford this purchase")


function applyDiscount(price){
    if(price > 20){
    let overspend = price - 20;
    overspend =  overspend * (10 / 100)
    return price - overspend;
    }
}

console.log(applyDiscount(100));

function calculateLoyaltyPoints(purchase){
    let currentPoints = 0;
    for(let i = 1; i <= purchase; i++){
        currentPoints++;
    }
    return currentPoints;
}

/*
MVP1
Develop a JavaScript function applyDiscount       create function that takes a price parameter
 that calculates the final price after applying a 10% discount on   apply a 10% discount to price
  single purchases over £20.
 This function should help increase the average purchase value by offering an immediate incentive.


MVP2
Create a function calculateLoyaltyPoints
 that awards points based on the purchase amount, where every dollar spent earns 1 point if no discount is applied.
  This function aims to build a foundation for a future loyalty program. 


MVP3  
BookNook need to make more money, so the discounts function needs to change.
 applyDiscount should now only apply the discount to the overspend above £20.
  Remember: Agile is all about embracing change 😅

Create a variable called overspend, this variable will store the overspent value over 20.
Once we have the overspend we apply a 10% to it
Substract the discounted overspend from the total price 

*/

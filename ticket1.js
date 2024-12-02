function convertGBPtoEUR(pound){
    return pound * 1.21;
}

function convertGBPtoUSD(dollar){
    return dollar * 1.27;
}

function convertGBPToCurrency(code, amount){
   if(code === 'EUR'){
    return convertGBPToCurrency(amount)
   }
   else if(code === 'USD'){
    return convertGBPtoUSD(amount);
   }
   else{
    return null;
   }
}

//MVP 3
//Write a function convertGBPToCurrency 
//which takes in both a currency code ("EUR" or "USD") and an amount of £ to convert.
// It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. 
//If an unknown code is entered, it should return null.






/*
convertGBPToCurrency(amount, currency);
let amount = 40;
let currency = '$';
console.log(integer ); /*

//let userInput = '40$' ---> A40 + B'$'  

//£10 OR 10$


//MVP 1
//Write a JavaScript function convertGBPtoEUR that takes in a specified amount in £
//and converts it to € using a given exchange rate. 
//The function should return the converted amount.

//MVP 2
//Write another function convertGBPtoUSD
//that takes in a specified amount in £,
//and converts it to $ using a given exchange rate.
//It should behave in a very similar way to the previous function.



/* function(currency){
first step is differentiate between currency
if string contains '$' then --->

}
*/
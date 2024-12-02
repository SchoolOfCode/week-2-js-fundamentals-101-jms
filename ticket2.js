
function displayTemperatureInCelsius(fahrenheit){
return (fahrenheit - 32) /1.8;
}
console.log(displayTemperatureInCelsius(212));

function displayTemperatureInFahrenheit(celsius){
    return celsius *1.8 + 32;
}
console.log(displayTemperatureInFahrenheit(100));

function toggleTemperatureDisplay(value){  //format: "100 C"
    let v = value.split(" ");
    let degrees = Number(v[0]);
    let units = v[1];

    if(units === "C"){
        return displayTemperatureInFahrenheit(degrees) + " F";
    }else if(units === "F"){
        return displayTemperatureInCelsius(degrees) + " C" ;
    }
}
let t1 = toggleTemperatureDisplay("100 C");
console.log(t1)
let t2 = toggleTemperatureDisplay(t1);
console.log(t2)
// console.log(toggleTemperatureDisplay2("100 C"))
/*
MVP 3
Create a function toggleTemperatureDisplay (parameters value, unit)
 that returns either Celsius or Fahrenheit depending on which was the last returned 
 (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). 
 Start with a default of the last returned format being Celsius.

MVP 1
Develop a JavaScript function displayTemperatureInCelsius
 that takes in a numerical Fahrenheit temperature reading and converts it to Celsius, 
 returning the number representing the Celsius value.
//Subtract 32 from degrees Fahrenheit · Divide the result by 1.8 (or 9/5).


MVP 2
Implement another function displayTemperatureInFahrenheit
 that performs the inverse operation.

*/
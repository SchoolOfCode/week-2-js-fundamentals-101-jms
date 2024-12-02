
function displayTemperatureInCelsius(fahrenheit){
return (fahrenheit - 32) /1.8;
}
console.log(displayTemperatureInCelsius(10));



/*
MVP 1
Develop a JavaScript function displayTemperatureInCelsius
 that takes in a numerical Fahrenheit temperature reading and converts it to Celsius, 
 returning the number representing the Celsius value.
//Subtract 32 from degrees Fahrenheit · Divide the result by 1.8 (or 9/5).


MVP 2
Implement another function displayTemperatureInFahrenheit that performs the inverse operation.

MVP 3
Create a function toggleTemperatureDisplay that returns either Celsius or Fahrenheit depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). Start with a default of the last returned format being Celsius.
*/
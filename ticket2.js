
function displayTemperatureInCelsius(fahrenheit){
    return (fahrenheit - 32) /1.8;
    }

function displayTemperatureInFahrenheit(celsius){
    return celsius * 1.8 + 32;
    }


    let defaultMeasure = 'celsius'; //This variable stores the new default, either celsius or fahrenheit.
    let newTemperature = 0; //This variable stores the new temperature after it has been converted.

    function toggleTemperatureDisplay(temperature){
    
    if(defaultMeasure === 'celsius'){
        defaultMeasure = 'fahrenheit';
        newTemperature = displayTemperatureInFahrenheit(temperature);
    }
    else if(defaultMeasure === 'fahrenheit') {
     defaultMeasure = 'celsius',
     newTemperature = displayTemperatureInCelsius(temperature);
    }
     return newTemperature;
}


/*
MVP 1
Develop a JavaScript function displayTemperatureInCelsius
 that takes in a numerical Fahrenheit temperature reading and converts it to Celsius, 
 returning the number representing the Celsius value.
//Subtract 32 from degrees Fahrenheit · Divide the result by 1.8 (or 9/5).


MVP 2
Implement another function displayTemperatureInFahrenheit that performs the inverse operation.
// Copy function
// Change name
// Change parameter names
// update conversion formula

MVP 3
//Create a function toggleTemperatureDisplay
 that returns either Celsius or Fahrenheit depending on which was the last returned 
 //(if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa).
  Start with a default of the last returned format being Celsius.

 // Save the default measure in a variable as a string that will toggle between 'celsius' and 'fahrenheit'
 // Set an if conditional that will choose which operation to perform based on the default measure string.
 // Toggle default variable value and return result.
*/
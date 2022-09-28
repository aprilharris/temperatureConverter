// **Challenge 2: Temperature Converter** 
// In this activity, we are going to write two functions.

//The first function will convert Celsius to Fahrenheit.

//The second function will convert Fahrenheit to Celsius.  

//This way we can complain about the weather with our friends overseas.

// Conversion Formulas
// _**C° to F°**: Multiply by 9, Divide by 5, then add 32._ 
// _**F° to C°**: Subtract 32, Multiply by 5, then divide by 9._

// _Unicode Characters_: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degrees symbol. 

//create a variable called "c"
//we'll use this variable to store the value of our celsius temperature
let c;

//next, let's assign a value to c
//in other words, enter the C° temperature you wish to convert
//we'll update c's value anytime we want to convert C° to F°
c=20;

//create a new variable called "c_to_f"
//let's make c_to_f equal to the C° to °F conversion formula
let c_to_f = (c * 9)/5 + 32;

// finally, let's print the result to the console
console.log("Celsius to Fahrenheit Conversion:");
console.log(c + '\u00B0C is ' + c_to_f + '\u00B0F');
//let's add a line break for readability purposes
console.log('\n');

//create a variable called "f"
//we'll use this variable to store the value of our fahrenheit temperature
let f;
//next, let's assign a value to f
//in other words, enter the F° temperature you wish to convert
//we'll update c's value anytime we want to convert F° to C°
f=83;

//create a new variable called "f_to_c"
//let's make f_to_c equal to the F° to °C conversion formula
let f_to_c = (f - 32)/9 * 5;
console.log("Fahrenheit to Celsius Conversion:");
console.log(f + '\u00B0F is ' + c + '\u00B0C');
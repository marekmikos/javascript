let myName = 'Marek';
console.log('My name is: ' + myName);


let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

// result will be 14 as 7 > 5
let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

// if we need to write code above and have output = 1 (need to rename a to b as "as" is already declared above)

let b = 2;
if (b < 5) {
  console.log(b / 2);
} else {
  console.log(b * 2);
}

// just to separate previous result
console.log('***New excercise***');

// print numbers from 1-9
for (let i = 1; i < 10; i++) {
    console.log(i);
}

// just to separate previous result
console.log('***New excercise***');

// print numbers from 10-1
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// just to separate previous result
console.log('***New excercise***');

// get even numbers from 0-20 
for (let i = 0; i <=  20; i++ ) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// just to separate previous result
console.log('***New excercise***');

// create function
let multiply = (a,b) => {
    return (a*b);
}

// call function
console.log(multiply(5,10));

// just to separate previous result
console.log('***New excercise***');

// print first N numbers between 1-20 with use of function

let printNumbersTill = (n) => {         // creating function
    if ( n < 20) {                      // lets pretend, that max number can be 20  
        for (let x = 1; x <= n; x++) {  // creating loop
            console.log(x);             // return first N numbers
        }
    } else console.log("Your number is too high (max 20)");    
}

printNumbersTill(19);

// just to separate previous result
console.log('***New excercise***');

// creating greeting function ("Hello <name>")

let greeting = (name) => {
    console.log("Hello " +name);
}

// calling functions
greeting('Marek');

// just to separate previous result
// console.log('***New excercise***');

// Create a function which gets an array as parameter and prints each value from it.

// let printArray = (array) => {                            // creating function
//     let arrayLength = array.length;                      // check the length of the array so we know, how many elements we neet to print
//         for (let y = 0; y <= arrayLength; y++) {         // creating loop to print array   
//             console.log(array[y]);
//         }
// }

// printArray([1,2,1,2,3,2,1,2]);

// just to separate previous result
console.log('***New excercise***array');

// Change your previous printValues function to use forEach loop.

let printArray = (array) => {
        array.forEach(element => {
            console.log(element);
        });
}

printArray([1,2,3,4,5,6,7,8,9,10,11]);
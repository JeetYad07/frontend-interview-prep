// Functions in JS
// Q1: What is function declaration, statement?
// function square(num){
//     return num * num;
// }

// Q2: What is function Expression?
// When we store function defination inside a variable, it is called fun expression
const squareRoot = function(num){
    return Math.sqrt(num);
}
// Anonymus func: function(num){
    // return Math.sqrt(num);
// }
// console.log(squareRoot(4))

// Q3: What are First Class Functions?
// In a language when a function are treated like a variable are called First Class Function.
// like we can pass a function to another fun like a variable
function displayFunction(fn){
    console.log("Squre root is " + fn(5));
    
}
// displayFunction(squareRoot)

// Q4: IIFE: Immediately Invoked function
// function square(num){
//     console.log(num * num);
// }
// square(5)
// IIFE:
// (function square(num){
//     console.log(num * num);
// })(5)

// O/P based Ques on IIFE:
(function (x){
    return (function (y){
        console.log(x);
        
    })(2);
})(1);
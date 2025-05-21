// Functions in JS
// Q1: What is function declaration, statement?
// function square(num){
//     return num * num;
// }

const { use } = require("react");

// Q2: What is function Expression?
// When we store function defination inside a variable, it is called fun expression
// const squareRoot = function(num){
//     return Math.sqrt(num);
// }
// Anonymus func: function(num){
    // return Math.sqrt(num);
// }
// console.log(squareRoot(4))

// Q3: What are First Class Functions?
// In a language when a function are treated like a variable are called First Class Function.
// like we can pass a function to another fun like a variable
// function displayFunction(fn){
//     console.log("Squre root is " + fn(5));
    
// }
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
// (function (x){
//     return (function (y){
//         console.log(x);
        
//     })(2);
// })(1);

// Q5: Function Scope

var num1 = 20, num2 = 3, name = "Jeet";
function multiply(){
    return num1 * num2;
}

// console.log(multiply()); // return 60

function getScore(){
    var num1 = 3
    var num2 = 4;
    function add(){
       return name + " scored " + (num1 + num2)
    }
    return add()
}

// console.log(getScore())// Jeet scored 7

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);  
//     },i * 1000)
// } /** O/P:  0,1,2,3,4 */
/**
 * let creates a block scope for every run.
 * but var have the global scope
 */
// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i * 1000)
// }
/** O/P: 5,5,5,5,5 */

//Q6:  Function Hoisting:

// sayMyName();


// function sayMyName(){
// console.log(x);
//     var x = 5;
//     console.log("My Name is Jeet");
    
// }


// Q7: Function Hoisting - O/P Based Question

var x = 21;

var fun = function(){
    console.log(x); // undefined: because in fun we will look for local scope not global scope.
    var x = 20;
    
}
// fun(); 

// Q10 - Params vs Arguments

function square(num){ // param
    return num * num;
}
// square(5) // arguments

// spread vs rest operator: 
function multiply(...nums){ // rest operator
    console.log(nums[0] * nums[1]);
     
}
var arr = [5,6]
// multiply(...arr) // this is called spread operator

// Tricky Interview Question:
const fn = (a,x,y, ...numbers) => { // It's giving error: Rest parameter must be last formal parameter
console.log(x,y);

};

// spread and rest operator should be at last
// fn(5,6,3,7,8,9);


// Q12: Callback function:
// A callback fun is a func passed into another func as an argument,
// which then invoked inside the outer func to complete some kind of routine or action

function greeting(name){
    alert('Hello ' + name);
}

function processUserInput(callback){
    var name = prompt("Please Enter your name. ")
    callback(name);
}

// processUserInput(greeting)

// Ex of callback: eventlistener, setTimeOut, map, filter

//Q13: Arrow function:
// 1. Have better and clean code
// Normal func
// const add = function (firstNum,secondNum){
//     return firstNum + secondNum;
// }
// Arrow func
// const add = (firstNum,secondNum) =>  firstNum + secondNum;

// Difference b/w arrow and normal func
// 1. Syntax difference
// 2. Arrow func have Implicit "return" keyword but normal don't
const add = function (num1,num2){
    return num1+num2;
}
const square2 = (num) => num * num;

//3. arguments:
// Normal func have arguments but arrow don't
function fb(){
    console.log(arguments);
    
}
// fb(1,2,3)
const fbArrow = () => {
    console.log(arguments);
    
}
// fbArrow(1,2,3)

// 4. this keyword:
let user = {
    username: "Roadside coder",
    rc1:() => {
        console.log("Subscribe to " + this.username);
        
    },
    rc2(){
        console.log("Subscribe to " + this.username);
        
    },
};
user.rc1();
user.rc2();
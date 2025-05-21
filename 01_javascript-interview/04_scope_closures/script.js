/**
 * scope: means where we can access specific variable and fun 
 * in our code.
 * scope is directly dependent on lexical environment.
 * 
 * Lexical Environment: Lexical Environment is created whenever is excution context is created.
 * Lexical Environment: local meory + reference to lexical environment of parent or lexical parent
 * Closure / scope chain: whole chain of lexical environment is called scope chain. 
 */

function a(){
    // trying to access in local scope
    c();
     
    function c(){
       console.log(b)
    }
}
// it is in global scope
 var b = "Heer"
// a();


/**
 * 
 * Closure in Js: A closure is the combination of a function bundled together(enclosed) with
 * reference to its surrounding state(the lexical environment).
 * In other words, a closure gives you access to an outer function's scope from an inner function.
 * In JS, closures are created every time a function is created, at func creation time.
 
 *  */ 

function subscribe(){
    var name = "Roadside Coder";
    function displayName(){
        alert(name);
    }
    displayName()
}

// subscribe()


function makeFunc(){
    var name = "mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

 const myFunc = makeFunc();
// myFunc();

// Closure make it possible to func to have private variables.

// Closure scope chain: 
var e = 5;
function add(a){
    return function (b){
        return function (c){
            return function (d){
                return a+b+c+d+e
            }
        }
    }
}
// console.log(add(1)(2)(3)(4))

// Q1: What will be logged to console?
let count = 0;
// (function printCount(){
//     if(count === 0){
//         let count = 1; // shadowing
//         console.log(count);
        
//     }
//     console.log(count);
    
// })();

// Q2: Write a func that would allow you to do this?

function createBase(num){
    return function(innerNum){
       // console.log(innerNum + num)
     }
}

var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // return 27

// Q3: Time Optimization:
function find(){
    let a = [];
    for(let i=0;i<1000000;i++){
        a[i] = i * i;
    }
    return function(index){
        console.log(a[index]);
    }
}
const closure = find()
// console.time("6");
// // closure(6);
// console.timeEnd("6")
// console.time("12");
// // closure(12);
// console.timeEnd("12")

// Q4: Block scope and setTimout
// function a(){
//     for(var i = 0;i<3;i++){
//         setTimeout(function log(){
//             console.log(i);
            
//         },1000)
//     }

// }
// 3
// 3
// 3

// function a(){
//     for(let i = 0;i<3;i++){
//         setTimeout(function log(){
//             console.log(i);
            
//         },1000)
//     }

// }
// a();

// how to print 0,1,2

// you cann't use let
function a(){
    
        for(var i = 0;i<3;i++){
            function inner(i){
            setTimeout(function log(){
                console.log(i);
                
             },1000)
            }
             inner(i)
        }
    

}
// a()

// Q5: How would you use a closure to create a private counter
function counter(){
    var _counter = 0;

    function add(increment){
        _counter += increment
    }

    function reterive(){
        return "Counter = " + _counter;
    }

    return {
        add,
        reterive
    }
}
const c = counter();
// c.add(5 );
// c.add(20);
// console.log(c.reterive());

// Q6: What is Module Pattern
// var Module = (function(){
//     function privateMethod(){
//         console.log("private");

//     }
//     return {
//         publicMethod: function(){
//             console.log("public");
            
//         }
//     }
// })();
// Module.publicMethod();
// Module.privateMethod()


//Q7: Make this run only once:
let view;
function likeTheVideo(){
    let clicked = 0;
    return function(){

        if(clicked > 0){
            console.log("Already subcribed")
        }else{
            view = "Roadside Coder";
            console.log("Subscribe to ", view);
            clicked++;
    
        }
    }
    
}
const isSubscribe = likeTheVideo()
// isSubscribe()
// isSubscribe()
// isSubscribe()

// Polyfill for Once();

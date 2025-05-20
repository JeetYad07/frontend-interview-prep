// var vs let vs const

// scope: 
 // Var is functional scope , let and const are block scope


 // {} -> block

 // This is allowed
//  {
//     var a = 5
//  }
//  console.log(a)

//  {
//     let a = 5
//  }
//  console.log(a)

// variable shadowing : var -> var & let -> let allowed, var -> let allowed, let -> var not alloed
// it is called illegal shadowing

// function test(){
//     var a = "Hello";
//     let b = "Bye"
//     if(true){
//         var a = "Hello";
//         var b = "Goodbye"
//         console.log(a)
//         console.log(b)
//     }
//     // console.log(a)
// }
// test()

// 3. Declaration: var can be re-decalred in same scope but let and const cann't
// var a;
// var a;

// const a;
// const a;

// 4. Declaration without initialisation: let and var can be Decalre without initlization but const can't
// const a = 5;
// let a;

// const v;

// 5. Re-Initialisation: Var and let can be updated but const can't
// it will give type error: assignment to const variable not allowed

// var a = 5
// a = 6

// let b = 10;
// b=10

// const c= 17
// c = 12




// let a = 10;

// function multiply(x){
//     return x * 10;
// }

// let b = multiply(a);
// console.log(b)

// Javascript execution Context: works in two phases:
/**
 * 1. Creation/ Memory creation Phase
 *      a = undefined
 *      multiply(){....}
 *      b = undefined
 * 2. Excution Phase
 *      a = 10;
 *      b = 100;
 *      100
 * 
 */



/**
 * Hoisting: In Js, hoisting is a behaviour where variable and function declaration are moved to the top of their containing
 * scope during the compilation phase.
 *  However, only the declarations are hoisted, not the initializations or assignments.
 */

// console.log(a)  // undefined
// var a = 10;  

// console.log(count)  // Cannot access 'a' before initialization
// let count = 10;
// var count2 = 12

/**
 * Temporal Dead Zone: TDZ is a specific behaviour related to variables declared using let and const.
 * It refers to the period b/w the start of the block scope and the actual declaration of the variable. 
 * During TDZ, accessing the variable will result in a ReferenceError.
 */

/***Interview Question:  */

function abc(){
    console.log(a,b,c);

    var a = 15;
    let b = 10;  // it is hoisted but in different memory which is called temporal dead zone.
    const c = 12;
}
abc()

// Currying in JS
/**
 * Currying is a transformation of functions that translates
 *  a function from callable as f(a, b, c) into callable as f(a)(b)(c).
 * 
 * Currying doesn’t call a function. It just transforms it.
 */
// Ex: f(a,b) into f(a)(b)

function f(a){
    return function(b){
        return `${a} ${b}`;
    }
}

// console.log(f(5)(6));
// Q1: sum(2)(5)(1)

function sumAll(a,b,c){
    return a+b+c;
}
// console.log(sumAll(2,6,1));

function sum(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}
// console.log(sum(2)(6)(1));

/**
 * Q2:
 *      evaluate("sum")(4)(2) => 6
        evaluate("multiply")(4)(2) => 6
        evaluate("divide")(4)(2) => 6
        evaluate("substract")(4)(2) => 6
 *  */ 

function evaluate(operation){
    return function(a){
        return function (b){
            if(operation === "sum"){
                return a+b;
            }else if (operation === "multiply"){
                    return a * b;
            }else if (operation === "divide"){
                return a / b;
            }else if(operation === "substract"){
                return a - b;
            }else{
                return "Invalid Operation"
            }
        }
    }
}

const mul = evaluate("multiply")
// console.log(mul(4)(2))
// console.log(evaluate("multiply")(4)(2))
// console.log(evaluate("divide")(4)(2))
// console.log(evaluate("substract")(4)(2))

// Q3: Infinte currying -> sum(1)(2)(3).....(n)

 // add(2)(3)(4)(5)(!)().... infinte

 function add(a){
    return function(b){
        // return function(){
        //  return a + b;
        // }  
        if(b) return add(a+b);
        return a;     
    }
 }
//  console.log(add(2)(3)(8)(20)(12)(1)(21)())

// Q4: Currying vs Partial Application

// Below is called partial application: partila application transform a fun into another func
// with small arity(no of argument)
function sum(a){
    return function (b,c){
        return a + b + c;
    };

}
const x = sum(10);
// console.log(x(5,6));
// console.log(x(3,2));

// or

// console.log(sum(20)(1,4));

// if i have to write same thing in currying:
// no of currying func have depend on no of argument it has
function sumCurr(a){
    return function (b){
        return function(c){
            return a + b + c;
        }
    }
}

// console.log(sumCurr(1)(2)(1));

// Q6: Real world scanerio for currying: Manipulating DOM

function updateElementText(id){
    return function(content){
        document.querySelector("#" + id).textContent = content;
    };
}

// we can do query selector once and then update the content using func

const updateHeader = updateElementText("heading");

// updateHeader("My Name is Vishal")

// Q6: curry implementation

function curry(func){
    return function curriedFun(...args){
        if(args.length >= func.length){
            return func(...args);
        }else {
            return function(...next){
                return curriedFun(...args,...next);
            };
        }
    };
}
const sums = (a,b,c,d) => a+b+c+d;

const totalSum = curry(sums);
console.log(totalSum(1)(2)(3)(4));




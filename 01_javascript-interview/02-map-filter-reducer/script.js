// What is map()?
/**
 * The map() method in js creates a new array populated with the results of calling
 * a provided function on every element in the calling arr. It doesn't modify the original 
 * arr but returns a new modified arr based on the callback function's logic.
 */

// const nums = [1,2,3,4];
// const modifiedArr = nums.map((num,i,nums)=>{
//     return num * 3 + i;
// })

// console.log(modifiedArr)

/**
 * Filter(): method creates a new arr with all elements that pass the test implmented by the provided function.
 * It returns a filtered arr based on the condition specified in the callback function,
 * where only elements that staisfy the condition are included.
 */

// const moreThanTwo = nums.filter((num,i,nums)=>{
//     return num > 2
// })

// console.log(moreThanTwo);

/**
 * Q: We can achieve filter functionality using map then why we need filter method?
 * A: yes map can achieve filter functionality but not directly.
 */
// const arr  = [1,2,3,4]
// const res = arr.map(n => n % 2 === 0 ? n : null)
// console.log(res);
// Using method is not a cleaner way as we get null also and have to write more code
// const res1 = arr.filter(n => n%2 === 0)
// console.log(res1);

/**
 * ✅ Why use filter() then?
Reason	Explanation
1. Clarity	--> filter() clearly communicates: "I want to keep only certain items."
2. Purpose-built -->	map() is for transforming data; filter() is for selecting data.
3. Avoids nulls/undefined -->	filter() returns only the elements that match the condition.
4. Performance	--> One clean pass, no need for extra filtering after map()
5. Better for maintenance -->	Anyone reading your code will instantly know your intent.
 */

/**
 * Reduce(): method executes a reducer function(that you provided) on each element of the array, resulting in a single o/p value.
 * It's often used for aggregating data, such as calculating a sum,by iterating through the arr and accumulating the results based on
 * the logic in the callback function.
 */
// If we don't provide initial value then first val of arr will be considered as initialval
// const nums = [1,2,3,4];
// const res = nums.reduce((acc,curr,i,nums)=>{
//     return acc + curr;
// },0)

// console.log(res);

/**
 * Polyfill for Map: 
 * 
 */

// arr.map((num,i,arr)=>{})
Array.prototype.myMap = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i],i,this))
        
    }
    return temp;
}

const nums = [1,2,3,4];
// const modifiedArr = nums.myMap((num,i,nums)=>{
//     return num * 3;
// })

// console.log(modifiedArr)

// Polyfill for filter
// arr.filter((num,i,arr)=>{})
Array.prototype.myFilter = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        // first we check the condition, if statisfied then only we push
        if(cb(this[i],i,this)) temp.push(this[i])
        
    }
    return temp;
}

const moreThanTwo = nums.myFilter((num,i,nums)=>{
    return num > 2;
})
// console.log(moreThanTwo);

// polyfill for reduce:
// arr.reduce((acc,curr,i,arr)=>{},initialVal)
Array.prototype.myReduce = function(cb,initialValue){
    let accumulater = initialValue;
    for (let i = 0; i < this.length; i++) {
       // what if user miss to give initialval
       accumulater = accumulater ? cb(accumulater,this[i],i,this) : this[i];      
    }
    return accumulater;
}

const res = nums.myReduce((acc,curr,i,nums)=>{
    return acc + curr;
})

// console.log(res);

// O/P based Question
// Q1: Return only name of students in capital letter
let students = [
    {name:"Jeet",rollNumber: 31, marks: 80},
    {name:"Jenny",rollNumber: 15, marks: 69},
    {name:"Vishal",rollNumber: 16, marks: 35},
    {name:"Deepu",rollNumber: 7, marks: 55},
]

// With traditonal for loop
// let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase())    
// }
const nameOfStudentsInCap = students.map(stu => stu.name.toUpperCase())
// console.log(nameOfStudentsInCap);

// Q2: Return only details of those who scored more than 60

// with traditional:
let stu = [];
for (let i = 0; i < students.length; i++) {
    if(students[i].marks > 60) stu.push(students[i]);
}
// console.log(stu);

// with filter in online
const stud = students.filter(stu => stu.marks > 60);

// console.log(stud);

// Q3: More than 60 marks and rollNumber greater than 15
const details = [];
for (let i = 0; i < students.length; i++) {
   if(students[i].marks > 60 && students[i].rollNumber > 15) details.push(students[i])
    
}
// console.log(details);

// using filter
const details1 = students.filter(stu => stu.marks > 60 && stu.rollNumber > 15)

// console.log(details1);
// Q4: Sum of marks od all students
const sum = students.reduce((acc,curr)=> acc + curr.marks,0);
// console.log(sum);

// Q5: Return only names of students who scored more than 60.
const std = students.filter(stu => stu.marks > 60).map(stu => stu.name)

// console.log(std);

// Q6: Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

const student = students.map((stu)=>{
    if(stu.marks < 60){
        stu.marks += 20;
    }
    return stu;
}).filter(stu => stu.marks > 60).reduce((acc,curr)=> acc + curr.marks,0)


// console.log(student);

// Diff b/w map vs forEach
/**
 * 1. Map -> transform original array into a new array
 * 2. forEach -> do the sideeffects no transformation
 * 3. Map have return type but forEach don't have
 */
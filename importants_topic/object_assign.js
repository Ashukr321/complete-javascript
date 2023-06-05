// here we see the object assign in the js 
// this is the another ways of clone  the array and object in the js 

//  create the obj 
const obj  = {
    name :"ashutosh kumar",
    age : 23,
    role :"developer",
}

// console.log(obj);

const obj2 = { ...obj};// clone the object by the help of the spred opeartors 

console.log(obj2);

// object assign 

const obj3 = Object.assign(obj2);
console.log(obj3);


// example of array 
const number = [3,5,3,2,2,4,5];

const obj4 = Object.assign(number);
console.log(obj4);
//variables in the js 

// three type of the variables int the js 
// first is let and var and cosnt 
// let and  var is global scope 
// let const is the block scope variables 

// let see the example of the variables 
// let name = "ashutosh kumar singh "

// console.log(name);
// let is the block scope variables means we can't access outside the 
// {

// }
{
    let fName = "ASHUTOSH";
    // fName  = "rahul";
    console.log(fName);
}

// console.log(fName);// undefined error reference error  

// const is also a block scope function in the js 

{
    const name= "ashutosh kumar singh";
    // name = "ankit"; 
    // we can't redeclare the const variables 

    console.log(name);
}

// console.log(name);

// variables name can be number  
let num = 23;
console.log(num);
// variables name can be array 
let arr = ["ashutosh", "kumar", "singh"];
console.log(arr);
// here traverse the array of the object 
// by the for loop in the js 

for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// variable can be object of the array 
var data = {
    name :"ashutosh ",
    age :24,
}

// clg of object of the data 
console.log(data);

// we can't itreate the object of the like array 


// variables name can be boolean value 
var b = true;
var d = 34>=34;
console.log(b);
console.log(d);

// === the is stricly equality check 
// if the data is eqaul with the  same data type 
let n1 = +"2";
// here we convert string to number  by adding + 

let n2 = 2;
console.log(n1===n2);// false 
console.log(n1==n2);// true

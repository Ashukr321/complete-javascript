console.log("string started ....");

var name = "ashutosh";
// string is collection of the characters 

console.log(name[0]);
console.log(name[5]);
console.log(name.length);
console.log(name.charAt(0));
console.log(name.charAt(2));
console.log(name.indexOf("s"));
console.log(name.indexOf("s", 2));
console.log(name.slice(0));

// type of operator gives the type of the data 
console.log(typeof +name);// convert string to number 


// convert number to string 
var fName  = 21+"";
console.log(typeof fName);

//string concatenation in the js 
const s1 = "ashutosh ";
const s2 = "kumar";
const s3 = s1 + s2;
console.log(s3);

// undefined 
var undefined;
console.log(undefined);

// const can't be undefined data 


// null  this is the type of the data  in the null 
console.log(typeof null);// THIS gives the obeject type of the data 

//  templets string in the js 
// this is also  mostly used in the react 
// template literals
// this help in to used the the  
const phone  = "mi";
const phone2 = "jio";

console.log(`${phone} this is phone 2 ${phone2}`);



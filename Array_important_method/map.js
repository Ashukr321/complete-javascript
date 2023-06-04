// map function in the  js 
// what is  the map function in the js 

// this is also take a callback function 

//create the  array 
// example 
const arr = [3,4,4,5,5];




// take a callback function and that execute for each element of the array 
// it return as a single element in array 

// const d = arr.map((data)=>{
    
//     return data;
// });

// console.log(d);



// here we see  the a important methods 
// parseint 

// this return two things 
// either int or nan 
// nan when string have text before the number 

// this is basically convert the string in to the int 
// const myNumber = "3";
// const x =3; 
// console.log(x+parseInt(myNumber));

// example 
// nan is the not  a number 

// const age = "50 my age is ";// this will gives the 50 
const age = " my age is 50 "; // this will gives the nan 

const x = parseInt(age);
console.log(x);
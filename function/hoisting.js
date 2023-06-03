// here we see the hosting in the js 
// what is the hoisting in the js  

// hoising means simple accesbility of the variables 
// var -> hoisted means we can access without  before declration 

// "use strict";
//example 
// var x = "ashutosh kumar "; // 
// func();// ashutosh kumar 

// function func(){
//     console.log(x);
// }


// let and const are not hoisted 
// we can't access without first declration of the programme 


//example 
// const myfunc = ()=>{
//     console.log(y);
// }
// myfunc();

// const  y= 23;




// javascrpt  fucntion declration are hoisted 

// hoisting sometimes gives error 
// so we can used the strict mode to resolve this problem 



// "use strict";
myFunction();

function myFunction() {
  let  y = 3.14;   // This will also cause an error because y is not declared
}
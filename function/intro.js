// // function in the js 

// // three type of the fucntion  in the js 
// // function declration  or function  statement 

// // function expression 
// // arrow function 

// // function declration in th  js 
// function add (a,b){
//     console.log(a+b);

// }


// // calling the function 
// add(23,44);

// //sing happybirthday 
// function sayHappyBirthDay(){
//     console.log("happy birth day ashutosh ");
// }



// // calling the function by the help of the 

// // calling the function 

// // example
// for (var i =0 ; i<10; i++){
//     sayHappyBirthDay();

// }

// // square of number  example 
// function square(number){
//     console.log(number*number);
// }
// square(23);



// // example 
// function myfunc(theObject){
//     theObject.age= 21;
// }
// const person= {
//     name : "Ashutosh kumar",
//     age : 20,
//     gender:"male",

// }

// console.log(person.age);// 20 ;
// myfunc(person);

// console.log(person.age);// 21 ;

// // example  function declratio with the array 

// function myArr(arr){
//     arr[0]= 40;
// }
// const arr = [23];

// console.log(arr[0]);// 23
// myArr(arr);
// console.log(arr[0]);// 40

// // factorial of number 
// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//   };
  
// console.log(factorial(5)); // 120



// function expression in the js 
// have name but store in variables 
// const singhHappyBirthDay = function(){
//     console.log("happy birthday to you Ashutohs kumar");
// }

//calling the function expression 
// singhHappyBirthDay();
// for(let i = 0 ; i<20; i++){
//     singhHappyBirthDay();
// }

// arrow function in the js 
// moslty used in the react 
const singhHappyBirthDay = () => {
    console.log("happy birth day ashu ");
}

// calling the function 
singhHappyBirthDay();

// for(let i = 0 ; i<10; i++){
//     singhHappyBirthDay();
// }